import { Form, Button } from "@adobe/react-spectrum";
import quickFetch from "@/components/quickFetch";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Logout() {
  const [csrfToken, setCsrfToken] = useState("");
  useQuery(["csrfToken"], () =>
    quickFetch("/api/auth/csrf", "csrfToken").then((token) =>
      setCsrfToken(token)
    )
  );

  return (
    <>
      <p>You are now logged in.</p>
      <Form
        isRequired
        necessityIndicator="label"
        action="/api/auth/signout"
        method="post"
      >
        <input type="hidden" name="csrfToken" value={csrfToken} />
        <input type="hidden" name="callbackUrl" value="/demos/login" />
        <Button variant="accent" type="submit">
          Logout
        </Button>
      </Form>
    </>
  );
}
