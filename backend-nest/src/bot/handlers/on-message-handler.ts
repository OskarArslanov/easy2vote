import TelegramBot from 'node-telegram-bot-api';
import { CommandValue } from '../types';
import { CommandEnum, defaultCommandValue } from '../commands';

const getMessageResponse = (msg: TelegramBot.Message) => {
  const message = msg.text;
  const { username } = msg.from;

  const commands: Record<CommandEnum, CommandValue> = {
    [CommandEnum.Start]: {
      text: `Welcome to the bot, ${username}! Here you able to automate MMOTOP votes`,
      options: {
        reply_markup: {
          inline_keyboard: [[{ text: 'Start', callback_data: 'start' }]],
        },
      },
    },
    [CommandEnum.Help]: {
      text: 'Help message',
    },
  };

  return commands[message as CommandEnum] || defaultCommandValue;
};

export const onMessageHandler = (bot: TelegramBot, msg: TelegramBot.Message) => {
  const chatId = msg.chat.id;
  const { text, options } = getMessageResponse(msg);
  bot.sendMessage(chatId, text, options);
};
