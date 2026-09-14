import type { Metadata } from 'next';
import { ResultsConcepts } from '@/components/miriams-store';

export const metadata: Metadata = {
  title: "Results Section Concepts | Miriam's Collection",
  description: 'Three product-page directions for explaining the results customers may notice over time.',
  robots: { index: false, follow: false },
};

export default function ResultsConceptsPage() {
  return <ResultsConcepts />;
}
