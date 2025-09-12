import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import getLocaleStrings from '@site/src/locales';
import clsx from 'clsx';
import { ButtonType, Card } from '../Card';

import styles from './styles.module.css';
import { getImageBasePath, isEnLocale } from '../../utils/helpers';

const getItems = (locale, defaultLocale) => {
  const {
    useFulLinksBtnLabel,
    useFulLinksCard1Title,
    useFulLinksCard1Description,
    useFulLinksCard2Title,
    useFulLinksCard2Description,
    useFulLinksCard3Title,
    useFulLinksCard3Description,
  } = getLocaleStrings(locale);

  const imagePath = getImageBasePath(locale, defaultLocale);

  return [{
    id: 1,
    image: `${imagePath}/useful/img_card_help.png`,
    title: useFulLinksCard1Title,
    titleIcon: `${imagePath}/useful/icon_support.png`,
    description: useFulLinksCard1Description,
    action: {
      label: useFulLinksBtnLabel,
      link: `https://helpdesk.zennolab.com/${isEnLocale(locale) ? 'en-us' : locale}`,
      type: ButtonType.GHOST,
    }
  }, {
    id: 2,
    image: `${imagePath}/useful/img_card_zennoclub.png`,
    title: useFulLinksCard2Title,
    titleIcon: `${imagePath}/useful/icon_club.png`,
    description: useFulLinksCard2Description,
    action: {
      label: useFulLinksBtnLabel,
      link: 'https://zenno.club/discussion/',
      type: ButtonType.GHOST,
    }
  }, {
    id: 3,
    image: `${imagePath}/useful/img_card_marketplace.png`,
    title: useFulLinksCard3Title,
    titleIcon: `${imagePath}/useful/icon_marketplace.png`,
    description: useFulLinksCard3Description,
    action: {
      label: useFulLinksBtnLabel,
      link: 'https://zennostore.com/',
      type: ButtonType.GHOST,
    }
  }];
}

export const UsefulLinks = () => {
  const { i18n } = useDocusaurusContext();
  const { currentLocale, defaultLocale } = i18n;
  const { useFulLinksTitle } = getLocaleStrings(currentLocale);
  const items = getItems(currentLocale, defaultLocale);

  return (
    <section className={clsx(styles.useFulLinks, 'container')}>
      <Heading as="h2" className={styles.useFulLinksTitle}>{useFulLinksTitle}</Heading>
      <div className={styles.useFulLinksList}>
        {items.map(({ id, ...item }) => (
          <Card key={id} classNames={styles.useFulCard} {...item} />
        ))}
      </div>
    </section>
  )
}
