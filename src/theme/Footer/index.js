import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '@site/src/locales';
import styles from './styles.module.css';
import clsx from 'clsx';
import { GrayBlock } from '@site/src/components';

export default function Footer() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { userAgreement } = getLocaleStrings(currentLocale);

  return (
    <GrayBlock isFooter>
      <div className={clsx(styles.footer, 'container')}>
        <p>
          <a href={`https://zennolab.com/${currentLocale}/`} target='_blank'>ZennoLab.com</a>
          © 2008–{new Date().getFullYear()}</p>
        <a href={`https://zennolab.com/${currentLocale}/terms-of-service/`} target='_blank'>{userAgreement}</a>
      </div>
    </GrayBlock>
  )
}