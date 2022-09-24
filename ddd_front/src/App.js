import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style";
import Header from "./Layout/Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
    </BrowserRouter>
  );
}

export default App;
