import Page from "@/components/Page";
import Login from "@/components/login/login";
import Logout from "@/components/login/logout";
import { useSession } from "next-auth/react";

export default function LoginDemo() {
  const session = useSession();

  let Stage = null;

  if (session.status === "unauthenticated") {
    Stage = Login;
  } else {
    Stage = Logout;
  }

  return (
    <Page title="Demos - Login">
      <h1>Login Demo</h1>
      <Stage />
    </Page>
  );
}
