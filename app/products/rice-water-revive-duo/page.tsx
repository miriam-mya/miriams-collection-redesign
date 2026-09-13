import type { Metadata } from 'next';
import { ProductDetail } from '@/components/miriams-store';

export const metadata: Metadata = {
  title: "Rice Water Revive Duo | Miriam's Collection",
  description:
    'Sulfate-free shampoo and conditioner powered by 65%+ real rice water and 16 active botanicals.',
  openGraph: {
    title: "Rice Water Revive Duo | Miriam's Collection",
    description:
      'A sulfate-free everyday ritual for softer, stronger, healthier-looking hair.',
    images: ['/revive-duo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rice Water Revive Duo | Miriam's Collection",
    description:
      'A sulfate-free everyday ritual for softer, stronger, healthier-looking hair.',
    images: ['/revive-duo.jpg'],
  },
};

export default function ReviveDuoPage() {
  return <ProductDetail />;
}
