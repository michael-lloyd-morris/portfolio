import { useRouter } from "next/router";
import InvalidLoginAlert from "./InvalidLoginAlert";
import LoginStrikeoutAlert from "./LoginStrikeoutAlert";
import LoginForm from "./LoginForm";

export default function Login() {
  const { error } = useRouter().query;
  let Errors;
  let showLogin = true;

  if (error === "InvalidLogin") {
    Errors = InvalidLoginAlert;
  } else if (
    error === "LoginStrikeout" ||
    document.cookie.includes("account-lock=true")
  ) {
    Errors = LoginStrikeoutAlert;
    showLogin = false;
  }

  return (
    <>
      <p>
        For this demonstration the username is &quot;john.doe@test.com&quot; and
        the password is &quot;password&quot;
      </p>
      {Errors && <Errors />}
      {showLogin && <LoginForm />}
    </>
  );
}
