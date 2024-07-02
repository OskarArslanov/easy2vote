import { GameEnum, ServerEnum } from './enums';
import { CommandValue, GameType } from './types';

export const botToken = '7486191683:AAEcCONc5tvBLoKRD8G4JJYgXIRfmX_wXIY';

export const defaultCommandValue: CommandValue = {
  response: 'None any reacts to this message',
};

const wowData: GameType = {
  name: GameEnum.Wow,
  mmotopUrl: 'https://wow.mmotop.ru',
  servers: [
    {
      name: ServerEnum.Sirus,
      mmotopUrl: 'https://wow.mmotop.ru/en/servers/5130',
      rating: 88,
      url: 'https://sirus.su',
      votes: 28875,
      voteUrl: 'https://wow.mmotop.ru/en/servers/5130/votes/new',
    },
  ],
};

export const gamesData: Record<GameEnum, GameType> = {
  [GameEnum.Wow]: wowData,
};
