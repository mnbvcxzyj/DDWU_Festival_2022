import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style";
import Header from "./pages/Layout/Header";
import Footer from "./pages/Layout/Footer";
import Test1 from "./pages/TestPage/Test1";
import Test2 from "./pages/TestPage/Test2";
import Test3 from "./pages/TestPage/Test3";
import Test4 from "./pages/TestPage/Test4";
import Test5 from "./pages/TestPage/Test5";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Test1 />} />
        <Route path="/introduce" element={<Test2 />} />
        <Route path="/timetable" element={<Test3 />} />
        <Route path="/booth_event" element={<Test4 />} />
        <Route path="/somtalk" element={<Test5 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
