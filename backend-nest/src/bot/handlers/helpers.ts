import TelegramBot from 'node-telegram-bot-api';

export const createInlineKeyboard = (data: TelegramBot.InlineKeyboardButton[]): TelegramBot.SendMessageOptions => ({
  reply_markup: {
    inline_keyboard: [data],
  },
});
