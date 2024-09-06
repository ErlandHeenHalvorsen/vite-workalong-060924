import { createHeader } from "./components/header.js";
import { createContent } from "./components/content.js";
import { createFooter } from "./components/footer.js";
document.addEventListener("DOMContentLoaded", async () => {
  const app = document.getElementById("app");
  // Add header
  const header = createHeader();
  app.appendChild(header);
  // Add main content (list of countries and weather info)
  const content = await createContent();
  app.appendChild(content);
  // Add footer
  const footer = createFooter();
  app.appendChild(footer);
  10;
});
