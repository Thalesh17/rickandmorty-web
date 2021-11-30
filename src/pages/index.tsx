import Characteres from "@components/Characteres";
import Layout from "@components/template/Layout";

export default function Home() {
  return (
    <div>
      <Layout title="Rick and Morty" subtitle="Desenvolvido por Thales Henrique">
        <Characteres />
      </Layout>
    </div>
  )
}
