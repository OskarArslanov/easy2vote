import TelegramBot from 'node-telegram-bot-api';

export type CommandValue = {
  text: string;
  options?: TelegramBot.SendMessageOptions;
};

export type GameType = {
  name: string;
  mmotopUrl: string;
  icon?: string;
  servers: ServerType[];
};

export type ServerType = {
  url: string;
  mmotopUrl: string;
  voteUrl: string;
  votes: number;
  rating: number;
  name: string;
};
