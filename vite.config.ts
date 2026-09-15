import { sites } from '@openai/sites-vite-plugin';
import tailwindcss from '@tailwindcss/postcss';
import { fileURLToPath } from 'node:url';
import vinext from 'vinext';
import { defineConfig } from 'vite';
import hostingConfig from './.openai/hosting.json';

const SITE_CREATOR_PLACEHOLDER_DATABASE_ID =
  '00000000-0000-4000-8000-000000000000';

const { d1, r2 } = hostingConfig;

// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === 'seatbelt';

const localBindingConfig = {
  main: 'vinext/server/fetch-handler',
  compatibility_flags: ['nodejs_compat'],
  d1_databases: d1
    ? [
        {
          binding: d1,
          database_name: 'site-creator-d1',
          database_id: SITE_CREATOR_PLACEHOLDER_DATABASE_ID,
        },
      ]
    : [],
  r2_buckets: r2
    ? [
        {
          binding: r2,
          bucket_name: 'site-creator-r2',
        },
      ]
    : [],
};

// Hosting only: when building for Vercel, swap the Cloudflare Workers output
// for Nitro's Vercel output. Local dev and Cloudflare builds are unchanged.
const isVercelBuild = Boolean(process.env.VERCEL || process.env.NITRO_PRESET);

// Nitro's server environment drops the `style` export condition, so bare CSS
// package imports in globals.css are aliased to their published stylesheets.
const packageCss = (id: string) =>
  fileURLToPath(new URL(`node_modules/${id}`, import.meta.url));

export default defineConfig(async () => {
  // Keep Wrangler and Miniflare state project-local. These are non-secret tool
  // settings; application environment belongs in ignored `.env*` files.
  process.env.WRANGLER_WRITE_LOGS ??= 'false';
  process.env.WRANGLER_LOG_PATH ??= '.wrangler/logs';
  process.env.MINIFLARE_REGISTRY_PATH ??= '.wrangler/registry';

  // Wrangler snapshots its log path while the Cloudflare plugin is imported.
  const hostingPlugin = isVercelBuild
    ? (await import('nitro/vite')).nitro()
    : (await import('@cloudflare/vite-plugin')).cloudflare({
        viteEnvironment: { name: 'rsc', childEnvironments: ['ssr'] },
        config: localBindingConfig,
      });

  return {
    css: { postcss: { plugins: [tailwindcss()] } },
    resolve: isVercelBuild
      ? {
          alias: {
            tailwindcss: packageCss('tailwindcss/index.css'),
            'tw-animate-css': packageCss('tw-animate-css/dist/tw-animate.css'),
            'shadcn/tailwind.css': packageCss('shadcn/dist/tailwind.css'),
          },
        }
      : undefined,

    server: isCodexSeatbeltSandbox
      ? { watch: { useFsEvents: false, usePolling: true } }
      : undefined,
    plugins: [
      vinext(),
      sites(),
      hostingPlugin,
    ],
  };
});
