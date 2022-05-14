import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { RecoilRoot } from "recoil";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
);
