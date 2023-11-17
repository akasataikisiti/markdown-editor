import { createGlobalStyle } from "styled-components";
import { Editor } from "./pages/editor";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { History } from "./pages/history";
import { useStateWithStorage } from "./hooks/use_state_with_storage";

function App() {
  const GlobalStyle = createGlobalStyle`
    body * {
      box-sizing: border-box;
    }
  `;
  const StorageKey = "/editor:text";
  const [text, setText] = useStateWithStorage("", StorageKey);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="/editor"
            element={<Editor text={text} setText={setText} />}
          />
          <Route path="history" element={<History setText={setText} />} />
          <Route path="*" element={<Navigate to="/editor" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
