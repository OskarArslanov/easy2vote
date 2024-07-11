import TelegramBot from 'node-telegram-bot-api';
import { CommandValue } from '../../types';
import { CommandEnum } from './enums';
import { gamesData } from '../callbacks/consts';
import { defaultCommandValue } from './consts';

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
  const { response, options } = getMessageResponse(msg);
  bot.sendMessage(chatId, response, options);
};
