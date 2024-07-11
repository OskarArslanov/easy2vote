import * as TelegramBot from 'node-telegram-bot-api';
import { onMessageHandler } from './handlers/messages/on-message-handler';
import { onCallbackQueryHandler } from './handlers/callbacks/on-callback-query-handler';

export const botSetup = () => {
  const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

  bot.on('message', (msg) => onMessageHandler(bot, msg));
  bot.on('callback_query', (query) => onCallbackQueryHandler(bot, query));
};
