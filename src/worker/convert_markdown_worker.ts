import { marked } from "marked";

self.addEventListener("message", (e) => {
  const text = e.data;
  const html = marked(text);
  self.postMessage({ html });
});

export default {};
