import { GlobalStyle } from "./style";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import Stamp from "./Stamp";
import Map from "./Map";
import Show from "./Show";
import Booth from "./Booth";
import InfoDDD from "./InfoDDD";
import InfoStaff from "./InfoStaff";
import InfoLion from "./InfoLion";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/CampusMap" element={<Map />}></Route>
        <Route path="/Stamp" element={<Stamp />}></Route>
        <Route path="/InfoDDD" element={<InfoDDD />}></Route>
        <Route path="/InfoStaff" element={<InfoStaff />}></Route>
        <Route path="/InfoLikeLion" element={<InfoLion />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
