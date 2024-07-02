import TelegramBot from 'node-telegram-bot-api';
import { gamesData } from '../consts';

export const onCallbackQueryHandler = (bot: TelegramBot, msg: TelegramBot.CallbackQuery) => {
  const { data, message } = msg;
  const gameData = gamesData[data];

  if (gameData) {
    bot.sendMessage(message.chat.id, 'Here are available servers', {
      reply_markup: {
        inline_keyboard: [gameData.servers.map((server) => ({ text: server.name, url: server.url }))],
      },
    });
  }
};
