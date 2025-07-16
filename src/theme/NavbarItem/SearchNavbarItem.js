import React from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SearchNavbarItem from '@theme-original/NavbarItem/SearchNavbarItem';

export default function SearchNavbarItemWrapper(props) {
  const location = useLocation();
  const { i18n } = useDocusaurusContext();
  
  // Проверяем, находимся ли мы в разделе ZennoDroid (учитываем локализацию)
  const isZennoDroidSection = location.pathname.includes('/zennodroid');
  
  // Формируем правильный путь с учетом локализации
  const videoCoursePath = i18n.currentLocale === 'ru' 
    ? '/zennodroid/video-course' 
    : `/${i18n.currentLocale}/zennodroid/video-course`;
  
  
  return (
    <>
      {isZennoDroidSection && (
        <div className="navbar__item video-course-link-container">
          <Link
            to={videoCoursePath}
            className="navbar__link video-course-link"
          >
            📺 {i18n.currentLocale === 'en' ? 'Video Course' : 'Видео-курс'}
          </Link>
        </div>
      )}
      <SearchNavbarItem {...props} />
    </>
  );
}
