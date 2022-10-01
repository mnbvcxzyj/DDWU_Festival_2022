import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventDetail from "./event/EventDetail";
import EventHome from "./event/EventHome";
import EventMap from "./event/EventMap";
import { GlobalStyle } from "./style";
import SomTalk from "./talk/SomTalk";
import Home from "./main/Home";
import Map from "./main/Map";
import Stamp from "./main/Map";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
        <Routes>
          {/* <Route path="/" element={</>}></Route> */}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/CampusMap" element={<Map />}></Route>
          <Route path="/Stamp" element={<Stamp />}></Route>
          <Route path="/event" element={<EventHome />} />
          <Route path="/event/detail:id" element={<EventDetail />} />
          <Route path="/eventmap" element={<EventMap />} />
          <Route path="/somtalk" element={<SomTalk />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
