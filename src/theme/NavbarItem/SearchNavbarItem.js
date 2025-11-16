import React from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import SearchNavbarItem from '@theme-original/NavbarItem/SearchNavbarItem';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '@site/src/locales';

export default function SearchNavbarItemWrapper(props) {
  const location = useLocation();
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const localeStrings = getLocaleStrings(currentLocale);

  // Проверяем, находимся ли мы в разделе ZennoDroid или ZennoPoster
  const isZennoDroidSection = location.pathname.includes('/zennodroid/');
  const isZennoPosterSection = location.pathname.includes('/zennoposter/');

  // Определяем URL для кнопки видео-курса
  let videoCourseUrl = null;
  if (isZennoDroidSection) {
    videoCourseUrl = '/zennodroid/video-course';
  } else if (isZennoPosterSection) {
    videoCourseUrl = '/zennoposter/hello/zennoposter-video-course';
  }

  return (
    <>
      {videoCourseUrl && (
        <div className="navbar__item video-course-link-container">
          <Link
            to={videoCourseUrl}
            className="navbar__link video-course-link"
          >
            {localeStrings.videoCourseLink}
          </Link>
        </div>
      )}
      <SearchNavbarItem {...props} />
    </>
  );
}
