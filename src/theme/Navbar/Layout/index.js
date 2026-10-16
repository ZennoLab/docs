import React, {useCallback, useEffect, useRef} from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

function NavbarBackdrop(props) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx('navbar-sidebar__backdrop', props.className)}
    />
  );
}

export default function NavbarLayout({children}) {
  const {
    navbar: {hideOnScroll, style},
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);
  const navbarElementRef = useRef(null);
  const setNavbarRef = useCallback(
    (node) => {
      navbarElementRef.current = node;
      navbarRef(node);
    },
    [navbarRef],
  );

  useEffect(() => {
    const navbarElement = navbarElementRef.current;
    if (!navbarElement) {
      return undefined;
    }

    const updateNavbarHeight = () => {
      const height = navbarElement.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        '--ifm-navbar-height',
        `${height}px`,
      );
    };

    updateNavbarHeight();

    const resizeObserver = new ResizeObserver(updateNavbarHeight);
    resizeObserver.observe(navbarElement);
    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateNavbarHeight);
      document.documentElement.style.removeProperty('--ifm-navbar-height');
    };
  }, []);

  return (
    <nav
      ref={setNavbarRef}
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation',
      })}
      className={clsx(
        'navbar',
        'navbar--fixed-top',
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ],
        {
          'navbar--dark': style === 'dark',
          'navbar--primary': style === 'primary',
          'navbar-sidebar--show': mobileSidebar.shown,
        },
      )}>
      {children}
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
    </nav>
  );
}
