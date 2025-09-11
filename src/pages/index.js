import Layout from '@theme/Layout';
import { Banner, Products, UsefulLinks } from '@site/src/components';


export default function Home() {
  return (
    <Layout
      title={`Документация ZennoLab`}
      description="Самый простой способ автоматизировать без знаний кода">
      <Banner />
      <main>
        <Products />
        <UsefulLinks />
      </main>
    </Layout>
  );
}
