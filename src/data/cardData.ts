// cardData.ts
export interface CardData {
  id: number;
  href: string;
  title: string;
  body: string;
  voteNumber: number;
}

export const cardData: CardData[] = [
  {
    id: 1,
    href: 'https://github.com/uglyorganization/frontend',
    title: 'github - frontend',
    body: 'Source code for this frontend available here',
    voteNumber: 10,
  },
  {
    id: 2,
    href: 'https://www.mediavida.com/foro/dev/the-ugly-organization-we-write-ugly-code-708871',
    title: '/dev diary',
    body: '/dev diary',
    voteNumber: 8
  },
  {
    id: 3,
    href: 'https://www.arnaudiaz.com',
    title: 'arnaudiaz blog',
    body: 'I am a human who fights entropy',
    voteNumber: 15,
  },
];