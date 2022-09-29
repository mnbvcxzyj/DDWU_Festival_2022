import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventDetail from "./event/EventDetail";
import EventHome from "./event/EventHome";
import EventMap from "./event/EventMap";
import { GlobalStyle } from "./style";
import SomTalk from "./talk/SomTalk";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Routes>
          <Route path="/event" element={<EventHome />} />
          <Route path="/event/detail:id" element={<EventDetail />} />
          <Route path="/eventmap" element={<EventMap />} />
          <Route path="/somtalk" element={<SomTalk />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
