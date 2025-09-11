import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import getLocaleStrings from '@site/src/locales';
import clsx from 'clsx';
import { GrayBlock } from '../GrayBlock';
import { ButtonType, Card } from '../Card';

import styles from './styles.module.css';
import { AnchorId } from '../../utils/constants';
import { getImageBasePath } from '../../utils/helpers';

/**
 * 
 * @param {string} locale 
 * @param {string} defaultLocale 
 * @returns array
 */
const getItems = (locale, defaultLocale) => {
  const {
    productsBtn,
    productsCard1Title,
    productsCard1Description,
    productsCard2Title,
    productsCard2Description,
    productsCard3Title,
    productsCard3Description,
    productsCard4Title,
    productsCard4Description,
    productsCard5Title,
    productsCard5Description,
    productsCard6Title,
    productsCard6Description,
    productsCard7Title,
    productsCard7Description,
  } = getLocaleStrings(locale);

  const imagePath = getImageBasePath(locale, defaultLocale);

  return [{
    id: 1,
    icon: `${imagePath}/products/icon_zennoposter.png`,
    title: productsCard1Title,
    description: productsCard1Description,
    action: {
      label: productsBtn,
      link: '/zennoposter/category/getting-started',
      type: ButtonType.PRIMARY
    }
  }, {
    id: 2,
    icon: `${imagePath}/products/icon_zennodroid.png`,
    title: productsCard2Title,
    description: productsCard2Description,
    action: {
      label: productsBtn,
      link: '/zennodroid/category/знакомство',
      type: ButtonType.PRIMARY
    }
  }, {
    id: 3,
    icon: `${imagePath}/products/icon_capmonster_cloud.png`,
    title: productsCard3Title,
    description: productsCard3Description,
    action: {
      label: productsBtn,
      link: 'https://docs.capmonster.cloud/ru/docs/getting-start/',
      type: ButtonType.PRIMARY
    }
  }, {
    id: 4,
    icon: `${imagePath}/products/icon_zennobrowser.png`,
    title: productsCard4Title,
    description: productsCard4Description,
    action: {
      label: productsBtn,
      link: '/zennobrowser/category/знакомство',
      type: ButtonType.PRIMARY
    }
  }, {
    id: 5,
    icon: `${imagePath}/products/icon_zennoproxy.png`,
    title: productsCard5Title,
    description: productsCard5Description,
    action: {
      label: productsBtn,
      link: '/zennoproxy/category/hello',
      type: ButtonType.PRIMARY
    }
  }, {
    id: 6,
    icon: `${imagePath}/products/icon_zennoproxychecker.png`,
    title: productsCard6Title,
    description: productsCard6Description,
    action: {
      label: productsBtn,
      link: 'https://zennolab.atlassian.net/wiki/spaces/RU/pages/475365507/ZennoProxyChecker',
      type: ButtonType.PRIMARY
    }
  }, {
    id: 7,
    icon: `${imagePath}/products/icon_cap_monster.png`,
    title: productsCard7Title,
    description: productsCard7Description,
    action: {
      label: productsBtn,
      link: 'https://zennolab.atlassian.net/wiki/spaces/RU/pages/475332615/CapMonster',
      type: ButtonType.PRIMARY
    }
  }];
}

export const Products = () => {
  const { i18n } = useDocusaurusContext();
  const { currentLocale, defaultLocale } = i18n;
  const { productsTitle } = getLocaleStrings(currentLocale);
  const productsItems = getItems(currentLocale, defaultLocale);

  return (
    <GrayBlock>
      <div className={clsx(styles.products, 'container')} id={AnchorId.PRODUCTS}>
        <Heading as="h2" className={styles.productsTitle}>{productsTitle}</Heading>
        <div className={styles.productsList}>
          {productsItems.map(({ id, ...item }) => (
            <Card key={id} classNames={styles.productsCard} {...item} />
          ))}
        </div>
      </div>
    </GrayBlock>
  )
}
