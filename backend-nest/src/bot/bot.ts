import * as TelegramBot from 'node-telegram-bot-api';
import { onMessageHandler } from './handlers/on-message-handler';
import { onCallbackHandler } from './handlers/on-callback-handler';

export const botSetup = () => {
  const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

  bot.on('message', (msg) => onMessageHandler(bot, msg));
  bot.on('callback_query', (cb) => onCallbackHandler(bot, cb));
};
