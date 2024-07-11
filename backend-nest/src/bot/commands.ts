import { CommandValue } from './types';

export enum CommandEnum {
  Start = '/start',
  Help = '/help',
}

export const defaultCommandValue: CommandValue = {
  text: 'Unknown command',
};
