import TelegramBot from 'node-telegram-bot-api';
import { GameEnum, ServerEnum } from './enums';

export type CommandValue = {
  response: string;
  options?: TelegramBot.SendMessageOptions;
};

export type GameType = {
  name: GameEnum;
  mmotopUrl: string;
  icon?: string;
  servers: ServerType[];
};

export type ServerType = {
  name: ServerEnum;
  url: string;
  mmotopUrl: string;
  voteUrl: string;
  votes: number;
  rating: number;
};
