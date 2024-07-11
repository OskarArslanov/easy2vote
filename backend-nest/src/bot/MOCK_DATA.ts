import { GameType } from './types';

const wow: GameType = {
  name: 'World of Warcraft',
  mmotopUrl: 'https://wow.mmotop.ru',
  servers: [
    {
      mmotopUrl: 'https://wow.mmotop.ru/en/servers/5130',
      rating: 88,
      url: 'https://sirus.su',
      votes: 28875,
      voteUrl: 'https://wow.mmotop.ru/en/servers/5130/votes/new',
      name: 'Sirus',
    },
  ],
};

export const gamesData: GameType[] = [wow];
