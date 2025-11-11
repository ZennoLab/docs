import React from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import Admonition from '@theme/Admonition';
import Translate, { translate } from '@docusaurus/Translate';

/**
 * Компонент для отображения предупреждения о правилах использования материалов
 * Автоматически определяет правильный путь к Disclaimer в зависимости от текущего плагина документации
 */
export default function DisclaimerNotice() {
  const location = useLocation();
  
  // Определяем текущий плагин документации по URL
  const getDisclaimerPath = () => {
    const pathname = location.pathname;
    
    if (pathname.includes('/zennoposter/')) {
      return '/zennoposter/Disclaimer';
    } else if (pathname.includes('/zennodroid/')) {
      return '/zennodroid/Disclaimer';
    } else if (pathname.includes('/zennoproxy/')) {
      return '/zennoproxy/Disclaimer';
    } else if (pathname.includes('/zennobrowser/')) {
      return '/zennobrowser/Disclaimer';
    } else if (pathname.includes('/capmonster/')) {
      return '/capmonster/Disclaimer';
    } else if (pathname.includes('/zennoproxychecker/')) {
      return '/zennoproxychecker/Disclaimer';
    }
    
    return '/Disclaimer';
  };

  const linkText = translate({
    id: 'disclaimer.notice.linkText',
    message: 'Material Usage Rules on this site',
    description: 'Link text for disclaimer notice',
  });

  const noticeText = translate({
    id: 'disclaimer.notice.prefix',
    message: 'Please read the',
    description: 'Text before link in disclaimer notice',
  });

  return (
    <Admonition type="info" title={
      <>
        {noticeText}{' '}
        <Link to={getDisclaimerPath()}>
          <em>{linkText}</em>
        </Link>
        .
      </>
    } />
  );
}

