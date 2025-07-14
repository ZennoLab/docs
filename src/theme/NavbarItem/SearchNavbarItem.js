import React from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import SearchNavbarItem from '@theme-original/NavbarItem/SearchNavbarItem';

export default function SearchNavbarItemWrapper(props) {
  const location = useLocation();
  
  // Проверяем, находимся ли мы в разделе ZennoDroid
  const isZennoDroidSection = location.pathname.startsWith('/zennodroid');
  
  return (
    <>
      {isZennoDroidSection && (
        <div className="navbar__item video-course-link-container">
          <Link
            to="/zennodroid/video-course"
            className="navbar__link video-course-link"
          >
            📺 Видео-курс
          </Link>
        </div>
      )}
      <SearchNavbarItem {...props} />
    </>
  );
}
