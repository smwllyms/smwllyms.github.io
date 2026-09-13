import { createRoot } from "react-dom/client";
import { App } from "./site/App";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
