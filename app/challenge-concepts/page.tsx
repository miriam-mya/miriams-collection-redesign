import type { Metadata } from 'next';
import { ChallengeConcepts } from '@/components/miriams-store';

export const metadata: Metadata = {
  title: "Challenge Section Concepts | Miriam's Collection",
  description: 'Three design directions for combining the formula challenge and ingredient story.',
  robots: { index: false, follow: false },
};

export default function ChallengeConceptsPage() {
  return <ChallengeConcepts />;
}
