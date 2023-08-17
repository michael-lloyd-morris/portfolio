import { useState } from "react";

const DrupalPagesQuery = {
  key: ["drupalQuery"],
  query: () =>
    fetch(`//drupal.mmorris-sandbox.net/pages?_format=json`).then((response) =>
      response.json()
    ),
};

export default DrupalPagesQuery;
