import { PUBLIC_ROUTER } from "@/settings/router";
import {
  HeaderMenusInterface,
  languagesOptionsInterface,
} from "@/models/header.model";

import iconVietnam from "../../../public/icons/layout/ic-vietnam-flag.svg";
import iconUnitedKingdom from "../../../public/icons/layout/ic-english-flag.svg";

const headerMenus: HeaderMenusInterface[] = [
  {
    key: "about-us",
    label: "about_us",
    href: PUBLIC_ROUTER?.ABOUT_US,
  },
  {
    key: "games",
    label: "games",
    href: PUBLIC_ROUTER?.GAMES,
  },
  {
    key: "partners",
    label: "partners",
    href: PUBLIC_ROUTER?.PARTNERS,
  },
  {
    key: "contact-us",
    label: "contact_us",
    href: PUBLIC_ROUTER?.CONTACT_US,
  },
];

const languagesOptions: languagesOptionsInterface[] = [
  {
    key: "vietnamese",
    label: "vietnamese",
    value: "vi",
    flag: iconVietnam,
  },
  {
    key: "english",
    label: "english",
    value: "en",
    flag: iconUnitedKingdom,
  },
];

export { headerMenus, languagesOptions };
