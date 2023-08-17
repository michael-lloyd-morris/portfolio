import { InlineAlert, Heading, Content } from "@adobe/react-spectrum";

export default function LoginStrikeoutAlert() {
  return (
    <InlineAlert variant="negative">
      <Heading>Login Strike Out</Heading>
      <Content>
        You have exceeded the maximum number of tries to log in. Your account
        has been locked. Please contact an administrator.
      </Content>
    </InlineAlert>
  );
}
