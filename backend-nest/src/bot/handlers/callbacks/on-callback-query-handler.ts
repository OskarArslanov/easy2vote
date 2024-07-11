import TelegramBot from 'node-telegram-bot-api';
import { GameType } from '../../types';
import { gamesData } from './consts';

export const onCallbackQueryHandler = (bot: TelegramBot, msg: TelegramBot.CallbackQuery) => {
  const { data, message } = msg;
  const gameData = gamesData[data];
  console.log(data);

  if (gameData) {
    const castedGameData = gameData as GameType;
    bot.sendMessage(message.chat.id, 'Here are available servers', {
      reply_markup: {
        inline_keyboard: [
          Object.keys(castedGameData).map((key) => ({ text: key, callback_data: castedGameData[key].name })),
        ],
      },
    });
  }
};
