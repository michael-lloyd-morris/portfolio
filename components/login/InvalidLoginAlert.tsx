import { InlineAlert, Heading, Content } from "@adobe/react-spectrum";

export default function InvalidLoginAlert() {
  return (
    <InlineAlert variant="negative">
      <Heading>Invalid Credentials</Heading>
      <Content>
        You submitted a bad username or password. Please try again.
      </Content>
    </InlineAlert>
  );
}
