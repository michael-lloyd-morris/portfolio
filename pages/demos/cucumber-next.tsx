import Page from "@/components/Page";
import DrupalPage from "@/components/DrupalPage";

export default function Home() {
  return (
    <Page title="Demos - Cucumber Testing in NextJS">
      <DrupalPage nodeId={10} />
    </Page>
  );
}
