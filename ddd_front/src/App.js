import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style";
<<<<<<< HEAD
import Header from "./pages/Layout/Header";
import Footer from "./pages/Layout/Footer";
import Test1 from "./pages/TestPage/Test1";
import Test2 from "./pages/TestPage/Test2";
import Test3 from "./pages/TestPage/Test3";
import Test4 from "./pages/TestPage/Test4";
import Test5 from "./pages/TestPage/Test5";
import TimeTable from "./pages/TimeTable/TimeTable";
=======
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

>>>>>>> 21b7585a8d0a00ac5e647b98d100758f7852b957
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
<<<<<<< HEAD
      <Header />
      <Routes>
        <Route path="/" element={<Test1 value="1" />} />
        <Route path="/introduce" element={<Test2 />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/booth_event" element={<Test4 />} />
        <Route path="/somtalk" element={<Test5 />} />
      </Routes>
      <Footer />
=======
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
>>>>>>> 21b7585a8d0a00ac5e647b98d100758f7852b957
    </BrowserRouter>
  );
}

export default App;
