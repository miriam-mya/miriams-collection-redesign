import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://miriams-collection-redesign.kadeashiq.chatgpt.site'),
  title: "Miriam's Collection | Rice Water Haircare & Skincare",
  description:
    'Heritage-inspired rice water haircare and skincare for stronger, softer, healthier-looking hair.',
  icons: {
    icon: [{ url: '/miriams-favicon-2026.svg', type: 'image/svg+xml' }],
    shortcut: '/miriams-favicon-2026.svg',
    apple: '/miriams-favicon-2026.svg',
  },
  openGraph: {
    title: "Miriam's Collection | Your wash day, reimagined",
    description:
      'Heritage-inspired rice water haircare and skincare for stronger, softer, healthier-looking hair.',
    type: 'website',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Miriam's Collection | Your wash day, reimagined",
    description:
      'Heritage-inspired rice water haircare and skincare for stronger, softer, healthier-looking hair.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
