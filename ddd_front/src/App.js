import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style";
import EventDetail from "./event/EventDetail";
import EventHome from "./event/EventHome";
import EventMap from "./event/EventMap";
import SomTalk from "./talk/SomTalk";
import Home from "./main/Home";
import Map from "./main/Map";
import Stamp from "./main/Map";
import Header from "./pages/Header";
import InfoDDD from "./introduce/InfoDDD";
import InfoStaff from "./introduce/InfoStaff";
import InfoLion from "./introduce/InfoLion";
import RouteInfo from "./RouteInfo";
import TimeTable from "./pages/TimeTable/TimeTable";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
        <Header />
        <Routes>
          <Route path="/" element={<RouteInfo />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/CampusMap" element={<Map />}></Route>
            <Route path="/Stamp" element={<Stamp />}></Route>
            <Route path="/event" element={<EventHome />} />
            <Route path="/event/detail:id" element={<EventDetail />} />
            <Route path="/eventmap" element={<EventMap />} />
            <Route path="/InfoDDD" element={<InfoDDD />}></Route>
            <Route path="/InfoStaff" element={<InfoStaff />}></Route>
            <Route path="/InfoLikeLion" element={<InfoLion />}></Route>
            <Route path="/timetable" element={<TimeTable />} />
          </Route>
          <Route path="/somtalk" element={<SomTalk />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
