import { Form, TextField, Button } from "@adobe/react-spectrum";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import quickFetch from "../quickFetch";

export default function LoginForm() {
  const [csrfToken, setCsrfToken] = useState("");
  useQuery(["csrfToken"], () =>
    quickFetch("/api/auth/csrf", "csrfToken").then((token) =>
      setCsrfToken(token)
    )
  );

  return (
    <Form
      isRequired
      necessityIndicator="label"
      action="/api/auth/callback/credentials"
      method="post"
    >
      <input type="hidden" name="csrfToken" value={csrfToken} />
      <input type="hidden" name="callbackUrl" value="/demos/login" />
      <TextField label="Email" type="email" name="username" isRequired />
      <TextField label="Password" type="password" name="password" isRequired />
      <Button variant="accent" type="submit">
        Login
      </Button>
    </Form>
  );
}
