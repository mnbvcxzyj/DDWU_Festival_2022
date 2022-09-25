import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
