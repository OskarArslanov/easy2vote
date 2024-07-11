import { ServerType, GameType } from 'src/bot/types';
import { ServerEnum, GameEnum } from './enums';

const sirusData: ServerType = {
  mmotopUrl: 'https://wow.mmotop.ru/en/servers/5130',
  rating: 88,
  url: 'https://sirus.su',
  votes: 28875,
  voteUrl: 'https://wow.mmotop.ru/en/servers/5130/votes/new',
};

const wowServersData: Record<ServerEnum, ServerType> = {
  [ServerEnum.Sirus]: sirusData,
};

const wowData: GameType = {
  name: GameEnum.Wow,
  mmotopUrl: 'https://wow.mmotop.ru',
  servers: wowServersData,
};

export const gamesData: Record<GameEnum, GameType> = {
  [GameEnum.Wow]: wowData,
};
