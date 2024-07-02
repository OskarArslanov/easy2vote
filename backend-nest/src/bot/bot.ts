import * as TelegramBot from 'node-telegram-bot-api';
import { onMessageHandler } from './handlers/on-message-handler';
import { botToken } from './consts';
import { onCallbackQueryHandler } from './handlers/on-callback-query-handler';

export const botSetup = () => {
  const bot = new TelegramBot(botToken, { polling: true });

  bot.on('message', (msg) => onMessageHandler(bot, msg));
  bot.on('callback_query', (query) => onCallbackQueryHandler(bot, query));
};
