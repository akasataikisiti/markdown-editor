import { createGlobalStyle } from "styled-components";
import { Editor } from "./pages/editor";

function App() {
  const GlobalStyle = createGlobalStyle`
    body * {
      box-sizing: border-box;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Editor />
    </>
  );
}

export default App;
