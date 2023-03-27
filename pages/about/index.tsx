import Page from "@/components/Page"
import DrupalPage from "@/components/DrupalPage";

export default function Home() {
  return (
    <Page>
      <DrupalPage nodeId={3}></DrupalPage>
    </Page>
  )
}
