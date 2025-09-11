import { useMemo } from 'react';
import NavbarItem from '@theme/NavbarItem';

import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarLogo from '@theme/Navbar/Logo';
import styles from './styles.module.css';
import { getMenuItems } from '../menuItems';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';

function NavbarItems({ items = [] }) {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  );
}

export default function NavbarContent() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  const isHomePage = useMemo(() => window.location.pathname === '/', [])
  const { leftItems, rightItems } = getMenuItems(currentLocale, isHomePage);

  return (
    <>
      <div className={clsx('navbar__inner', { [styles.navbarHomePage]: isHomePage })}>
        <div className="navbar__items">
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </div>
        <div className="navbar__items navbar__items--right">
          <NavbarItems items={rightItems} />
          {!isHomePage && <NavbarColorModeToggle className={styles.colorModeToggle} />}
        </div>
      </div>
    </>
  );
}
