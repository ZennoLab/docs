import { DefaultNavbarItemProps } from '@theme/NavbarItem';
import getLocaleStrings from '@site/src/locales';

const leftItems = [
  {
    type: 'search',
    position: 'left',
    label: '',
    href: '',
  },
];

export const getMenuItems = (locale) => {
  const localeStrings = getLocaleStrings(locale);
  
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

  const productItems = [
    {
      type: 'docSidebar',
      sidebarId: 'tutorialSidebar',
      position: 'right',
      label: 'ZennoDroid',
      docsPluginId: 'zennodroid',
      title: localeStrings.tooltipZennoDroid,
    },
    {
      type: 'docSidebar',
      sidebarId: 'zennoposterSidebar',
      position: 'right',
      label: 'ZennoPoster',
      docsPluginId: 'zennoposter',
      title: localeStrings.tooltipZennoPoster,
    },
    {
      type: 'docSidebar',
      sidebarId: 'zennoproxySidebar',
      position: 'right',
      label: 'ZennoProxy',
      docsPluginId: 'zennoproxy',
      title: localeStrings.tooltipZennoProxy,
    },
    {
      type: 'docSidebar',
      sidebarId: 'zennobrowserSidebar',
      position: 'right',
      label: 'ZennoBrowser',
      docsPluginId: 'zennobrowser',
      title: localeStrings.tooltipZennoBrowser,
    },
    {
      type: 'docSidebar',
      sidebarId: 'capmonsterSidebar',
      position: 'right',
      label: 'CapMonster',
      docsPluginId: 'capmonster',
      title: localeStrings.tooltipCapMonster,
    },
  ];

  rightItems.unshift(...productItems);

  return { leftItems, rightItems };
};
