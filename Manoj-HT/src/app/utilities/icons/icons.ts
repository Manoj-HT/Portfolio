import { EventEmitter, Output } from '@angular/core';
import { GitHubIcon } from './github.icon';
import { GmailIcon } from './gmail.icon';
import { LinkedInIcon } from './linkedIn.icon';
import { RedditIcon } from './reddit.icon';
import { TelegramIcon } from './telegram.icon';
import { WhatsAppIcon } from './whatsapp.icon';

export const Icons = [
  WhatsAppIcon,
  RedditIcon,
  TelegramIcon,
  GmailIcon,
  GitHubIcon,
  LinkedInIcon
];

export const socialDetails = {
  whatsapp: {},
  reddit: {},
  telegram: {},
  github: {},
  gmail: {},
  linkedIn: {},
};

export type IconActionType = {
  name: string;
  action : 'click' | 'enter' | 'leave';
}