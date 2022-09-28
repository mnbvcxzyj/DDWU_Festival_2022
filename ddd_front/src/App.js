import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style";
import Home from "./Home";
import Stamp from "./Stamp";
import Map from "./Map";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Map />
    </BrowserRouter>
  );
}

export default App;
