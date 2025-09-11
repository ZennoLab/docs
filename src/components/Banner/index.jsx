import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import getLocaleStrings from '@site/src/locales';
import BannerSVG from '@site/static/img/banners/banner.svg';
import styles from './banner.module.css';
import { AnchorId } from '@site/src/utils/constants';

export const Banner = () => {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { headerBtn, bannerTitle, bannerDescription } = getLocaleStrings(currentLocale);

  return (
    <header className='container'>
      <section className={styles.banner}>
        <Heading as="h1" className={styles.bannerTitle}>{bannerTitle}</Heading>
        <p className={styles.bannerDescription}>{bannerDescription}</p>
        <Link to={`#${AnchorId.PRODUCTS}`} className={`button button--primary ${styles.bannerLink}`}>{headerBtn}</Link>
        <div className={styles.bannerImgWrapper}>
          <BannerSVG />
        </div>
      </section>
    </header>
  )
}
