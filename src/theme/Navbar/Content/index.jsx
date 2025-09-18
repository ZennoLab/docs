import NavbarItem from '@theme/NavbarItem';

import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarLogo from '@theme/Navbar/Logo';
import styles from './styles.module.css';
import { getMenuItems } from '../menuItems';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

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

  const { leftItems, rightItems } = getMenuItems(currentLocale);

  return (
    <>
      <div className="navbar__inner">
        <div className="navbar__items">
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </div>
        <div className="navbar__items navbar__items--right">
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </div>
      </div>
    </>
  );
}
