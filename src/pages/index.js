import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { Banner, Products, UsefulLinks } from '@site/src/components';


export default function Home() {
  return (
    <Layout
      title={`Документация ZennoLab`}
      description="Самый простой способ автоматизировать без знаний кода">
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
