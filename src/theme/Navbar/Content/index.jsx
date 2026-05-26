import NavbarItem from '@theme/NavbarItem';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';

import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarLogo from '@theme/Navbar/Logo';
import styles from './styles.module.css';
import { getMenuItems } from '../menuItems';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '@site/src/locales';

function NavbarItems({ items = [] }) {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  );
}

function getVideoCourseUrl(pathname) {
  if (pathname.includes('/zennodroid/')) {
    return '/zennodroid/video-course';
  }

  if (pathname.includes('/zennoposter/')) {
    return '/zennoposter/hello/zennoposter-video-course';
  }

  if (pathname.includes('/zennobrowser/')) {
    return '/zennobrowser/introduction/zennobrowser-video-course';
  }

  return null;
}

function VideoCourseLink({to, label}) {
  if (!to) {
    return null;
  }

  return (
    <div className="navbar__item video-course-link-container">
      <Link to={to} className="navbar__link video-course-link">
        {label}
      </Link>
    </div>
  );
}

export default function NavbarContent() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const location = useLocation();
  const localeStrings = getLocaleStrings(currentLocale);
  const videoCourseUrl = getVideoCourseUrl(location.pathname);

  const { searchItems, productItems, utilityItems } = getMenuItems(currentLocale);

  return (
    <>
      <div className={clsx('navbar__inner', styles.navbarInner)}>
        <div className={clsx('navbar__items', styles.mainItems)}>
          <NavbarLogo />
          <NavbarItems items={searchItems} />
        </div>
        <div className={clsx('navbar__items', styles.productItems)}>
          <VideoCourseLink
            to={videoCourseUrl}
            label={localeStrings.videoCourseLink}
          />
          <NavbarItems items={productItems} />
        </div>
        <div className={clsx('navbar__items navbar__items--right', styles.utilityItems)}>
          <NavbarItems items={utilityItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </div>
      </div>
    </>
  );
}
