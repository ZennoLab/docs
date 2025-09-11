import { DefaultNavbarItemProps } from '@theme/NavbarItem';

import enNavbar from '../../../i18n/en/docusaurus-theme-classic/navbar.json';
import ruNavbar from '../../../i18n/ru/docusaurus-theme-classic/navbar.json';
import { AnchorId } from '../../utils/constants';

const messages = {
  en: enNavbar,
  ru: ruNavbar,
};

const getLabel = (locale, key, fallback) => {
  const messageSet = messages[locale];
  return messageSet?.[key]?.message || fallback;
};

const leftItems = [
  {
    type: 'search',
    position: 'left',
    label: '',
    href: '',
  },
];

export const getMenuItems = (locale, isHomePage) => {
  const rightItems = [
    {
      type: 'localeDropdown',
      position: 'right',
      dropdownItemsBefore: [],
      dropdownItemsAfter: [],
      href: '',
      label: '',
    },
  ];

  if (isHomePage) {
    rightItems.unshift({
      position: 'right',
      label: getLabel(locale, 'item.label.toDocs', 'Docs'),
      href: `#${AnchorId.PRODUCTS}`,
      className: 'button button--primary',
    })

    return { rightItems };
  }

  return { leftItems, rightItems };
};
