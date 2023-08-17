import { TextField, Button } from "@adobe/react-spectrum";

export default function Validate() {
  return <>
    <p>A validation code has been sent to the cell phone for this account.</p>
    <TextField label="Validation Code" type="text" name="validation" isRequired />
    <Button variant="accent" type="submit">Send</Button>
  </>
}