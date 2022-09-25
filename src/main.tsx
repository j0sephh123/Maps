import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ColorThemeContextProvider from "./ColorThemeContextProvider";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <ColorThemeContextProvider>
      <App />
    </ColorThemeContextProvider>
  </StrictMode>
);
