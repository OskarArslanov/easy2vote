import TelegramBot from 'node-telegram-bot-api';
import { defaultCommandValue, gamesData } from '../consts';
import { CommandEnum } from '../enums';
import { CommandValue } from '../types';

const getMessageResponse = (msg: TelegramBot.Message) => {
  const message = msg.text;
  const { username } = msg.from;

  const commands: Record<CommandEnum, CommandValue> = {
    [CommandEnum.Start]: {
      response: `Welcome to the bot, ${username}! Here you able to automate MMOTOP votes`,
      options: {
        reply_markup: {
          inline_keyboard: [Object.keys(gamesData).map((key) => ({ text: key, callback_data: key }))],
        },
      },
    },
    [CommandEnum.Help]: {
      response: 'Help message',
    },
  };

  return commands[message as CommandEnum] || defaultCommandValue;
};

export const onMessageHandler = (bot: TelegramBot, msg: TelegramBot.Message) => {
  const chatId = msg.chat.id;
  console.log(chatId);
  const { response, options } = getMessageResponse(msg);
  bot.sendMessage(chatId, response, options);
};
