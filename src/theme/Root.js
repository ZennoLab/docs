import React, {useEffect} from 'react';
import {useLocation} from '@docusaurus/router';

export default function Root({children}) {
  const location = useLocation();

  // Добавляем класс для ZennoDroid страниц
  const updateBodyClass = (pathname) => {
    if (pathname.includes('/zennodroid')) {
      document.body.classList.add('docs-zennodroid');
      document.body.setAttribute('data-pathname', pathname);
    } else {
      document.body.classList.remove('docs-zennodroid');
      document.body.setAttribute('data-pathname', pathname);
    }
  };

  // При навигации
  useEffect(() => {
    updateBodyClass(location.pathname);
  }, [location]);

  // При загрузке страницы
  useEffect(() => {
    updateBodyClass(location.pathname);
    updateBodyClass(window.location.pathname);
    setTimeout(() => updateBodyClass(window.location.pathname), 100);
  }, []);

  // добавляем искусственную прокрутку к элементу, если в URL есть хеш
  useEffect(() => {
    if (location.hash) {
      // Даем React время на отрисовку контента (100ms)
      const timeout = setTimeout(() => {
        const id = decodeURIComponent(location.hash.substring(1));
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [location.hash]);

  return <>{children}</>;
}
