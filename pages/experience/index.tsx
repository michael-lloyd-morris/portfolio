import Page from "@/components/Page";
import DrupalPage from "@/components/DrupalPage";

export default function Home() {
  return (
    <Page title="Experience">
      <DrupalPage nodeId={5}></DrupalPage>
    </Page>
  )
}
