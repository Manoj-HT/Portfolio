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

export const socialDetails : SocialDetailsObjectType = {
  whatsapp: {
    id : "+918277429750",
    href : "https://wa.me/+918277429750",
    linkName: "Message me on Whatsapp"
  },
  reddit: {
    id : "manoj-ht",
    href : "https://www.reddit.com/u/manoj-ht",
    linkName: "PM on Reddit"
  },
  telegram: {
    id: "ManuHT16",
    href : "https://t.me/ManuHT16",
    linkName: "Message me on Telegram"
  },
  github: {
    id: "Manoj-HT",
    href : "https://github.com/Manoj-HT",
    linkName: "Take a look at my Github"
  },
  gmail: {
    id: "manulogan101@gmail.com",
    href: "mailto:manulogan101@gmail.com",
    linkName: "Mail me on Gmail"
  },
  linkedIn: {
     id: "Manoj HT",
     href : "linkedin.com/in/manoj-ht",
     linkName: "Connect on LinkedIn"
  },
};

export type IconActionType = {
  name: string;
  action : 'click' | 'enter' | 'leave';
}

export type SocialDetailsType = {
  id : string;
  href : string;
  linkName : string;
}

type SocialDetailsObjectType = {
  [name : string] : SocialDetailsType
}