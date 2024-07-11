import TelegramBot from 'node-telegram-bot-api';
import { GameEnum, ServerEnum } from './handlers/callbacks/enums';

export type CommandValue = {
  response: string;
  options?: TelegramBot.SendMessageOptions;
};

export type GameType = {
  name: GameEnum;
  mmotopUrl: string;
  icon?: string;
  servers: Record<ServerEnum, ServerType>;
};

export type ServerType = {
  url: string;
  mmotopUrl: string;
  voteUrl: string;
  votes: number;
  rating: number;
};
