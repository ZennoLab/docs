import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}
    style={{padding: "3rem 0"}}
    >
      <div className="container">
        <Heading as="h1" className="hero__title">
          Документация ZennoDroid
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/zennodroid/category/знакомство">
            Приступим к знакомству 📲
          </Link>
        </div>
      </div>
    </header>
  );
}
// Заголовок hero {siteConfig.title}

function HomepageHeaderZennoPoster() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}
    style={{backgroundColor: '#1868D8', padding: "3rem 0"}}
    >
      <div className="container">
        <Heading as="h1" className="hero__title">
        Документация ZennoPoster
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/zennoposter/category/getting-started">
            Приступим к знакомству 🖥
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Документация ZennoLab`}
      description="Самый простой способ автоматизировать без знаний кода">
      <HomepageHeader />
      <HomepageHeaderZennoPoster />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
