import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Banner, Products, UsefulLinks } from '@site/src/components';
import getLocaleStrings from '@site/src/locales';


export default function Home() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { title, description } = getLocaleStrings(currentLocale)

  return (
    <Layout
      title={title}
      description={description}>
      <Head>
        <meta name="google-site-verification" content="bAeMEZMIwgWa0nQ-UsAdRWNewH4o9ynLQui-iXoJruc" />
        <meta name="yandex-verification" content="e5efd80d7516472d" />
      </Head>
      <Banner />
      <main>
        <Products />
        <UsefulLinks />
      </main>
    </Layout>
  );
}
