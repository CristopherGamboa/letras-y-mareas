import { CardIcon } from "@core/enums/card-icon";

export type Card =
  | {
      description: string;
      icon: CardIcon;
      image: string;
      route: string;
      url?: never;
    }
  | {
      description: string;
      icon: CardIcon;
      image: string;
      url: string;
      route?: never;
    };
