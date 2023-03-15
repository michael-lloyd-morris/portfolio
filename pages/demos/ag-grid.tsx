import Page from "@/components/Page";
import DrupalPage from "@/components/DrupalPage";
import GridDemo from "@/components/chess/GridDemo"
export default function Home() {

  return (
    <Page title="Demos - AgGrid">
      <DrupalPage nodeId={6} />
      <GridDemo />
    </Page>
  )
}