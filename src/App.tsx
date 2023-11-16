import { createGlobalStyle } from "styled-components";
import { Editor } from "./pages/editor";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { History } from "./pages/history";

function App() {
  const GlobalStyle = createGlobalStyle`
    body * {
      box-sizing: border-box;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/editor" element={<Editor />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<Navigate to="/editor" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
