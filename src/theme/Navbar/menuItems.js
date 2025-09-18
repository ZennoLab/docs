import { DefaultNavbarItemProps } from '@theme/NavbarItem';

const leftItems = [
  {
    type: 'search',
    position: 'left',
    label: '',
    href: '',
  },
];

export const getMenuItems = (locale) => {
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

  // Добавляем элементы продуктов для всех страниц
  const productItems = [
    {
      type: 'docSidebar',
      sidebarId: 'tutorialSidebar',
      position: 'right',
      label: 'ZennoDroid',
      docsPluginId: 'zennodroid',
    },
    {
      type: 'docSidebar',
      sidebarId: 'zennoposterSidebar',
      position: 'right',
      label: 'ZennoPoster',
      docsPluginId: 'zennoposter',
    },
    {
      type: 'docSidebar',
      sidebarId: 'zennoproxySidebar',
      position: 'right',
      label: 'ZennoProxy',
      docsPluginId: 'zennoproxy',
    },
    {
      type: 'docSidebar',
      sidebarId: 'zennobrowserSidebar',
      position: 'right',
      label: 'ZennoBrowser',
      docsPluginId: 'zennobrowser',
    },
    {
      type: 'docSidebar',
      sidebarId: 'capmonsterSidebar',
      position: 'right',
      label: 'CapMonster',
      docsPluginId: 'capmonster',
    },
  ];

  rightItems.unshift(...productItems);

  return { leftItems, rightItems };
};
