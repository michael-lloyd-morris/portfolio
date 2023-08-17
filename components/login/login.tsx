import { Form, TextField, Button, InlineAlert, Heading, Content } from "@adobe/react-spectrum";
import quickFetch from "@/components/quickFetch"
import { useState } from "react"
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

function Errors() {
  const { error } = useRouter().query;

  if (error === "InvalidLogin") {
    return <InlineAlert variant="negative">
      <Heading>Invalid Credentials</Heading>
      <Content>You submitted a bad username or password. Please try again.</Content>
    </InlineAlert>
  } else {
    return <></>
  }
}

export default function Login() {
  const [ csrfToken, setCsrfToken ] = useState("")
  useQuery(["csrfToken"], () => quickFetch("/api/auth/csrf", "csrfToken").then(token => setCsrfToken(token)))
  
  return <>
  <p>For this demonstration the username is &quot;john.doe@test.com&quot; and the password is &quot;password&quot;</p>
  <Form isRequired necessityIndicator="label" action="/api/auth/callback/credentials" method="post">
    <Errors />
    <input type="hidden" name="csrfToken" value={csrfToken} />
    <input type="hidden" name="callbackUrl" value="/demos/login" />
    <TextField label="Email" type="email" name="username" isRequired />
    <TextField label="Password" type="password" name="password" isRequired />
    <Button variant="accent" type="submit">Login</Button>
  </Form>
  </>
}