import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventDetail from "./event/EventDetail";
import EventHome from "./event/EventHome";
import { GlobalStyle } from "./style";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Routes>
          <Route path="/event" element={<EventHome />} />
          <Route path="/event/detail:id" element={<EventDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
