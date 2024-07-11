import TelegramBot from 'node-telegram-bot-api';
import { gamesData } from '../MOCK_DATA';
import { createInlineKeyboard } from './helpers';

enum Step {
  Game = 'Select a game',
  Server = 'Select a server',
  Vote = 'Vote for the server',
}

interface StepData {
  step: Step;
  value: string;
}

const initStep: StepData = {
  step: Step.Game,
  value: '',
};

const steps: StepData[] = [];

const getInlineKeyboard = (data: StepData) => {
  const { step, value } = data;
  switch (step) {
    case Step.Game: {
      return {
        nextStep: Step.Server,
        options: createInlineKeyboard(gamesData.map(({ name }) => ({ text: name, callback_data: name }))),
      };
    }
    case Step.Server: {
      const servers = gamesData.find(({ name }) => name === value)?.servers;
      return {
        nextStep: Step.Vote,
        options: createInlineKeyboard(servers.map(({ name }) => ({ text: name, callback_data: name }))),
      };
    }
    case Step.Vote: {
      const servers = gamesData.find(({ name }) => name === steps[0].value)?.servers;
      const server = servers?.find(({ name }) => name === steps[1].value);
      return {
        options: createInlineKeyboard([
          { text: 'Vote', url: server.voteUrl },
          { text: 'Back', callback_data: 'back' },
        ]),
      };
    }
    default: {
      return {
        options: createInlineKeyboard([{ text: 'Unknown step, back', callback_data: 'back' }]),
      };
    }
  }
};

export const onCallbackHandler = (bot: TelegramBot, msg: TelegramBot.CallbackQuery) => {
  const isInit = !steps.length;
  const currentStep = isInit ? initStep : steps[steps.length - 1];
  const { data, message } = msg;
  const chatId = message.chat.id;
  console.log(data);
  if (data === 'back') {
    const prevStep = steps.pop();
    const { options } = getInlineKeyboard(prevStep);
    console.log(steps, prevStep);
    bot.sendMessage(chatId, prevStep.step, options);
    return;
  }

  if (!isInit) {
    currentStep.value = data;
  }

  const { nextStep, options } = getInlineKeyboard(currentStep);
  bot.sendMessage(chatId, currentStep.step, options);
  steps.push({ step: nextStep, value: data });
};
