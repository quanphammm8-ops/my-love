import { useEffect } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} replace />} />
        <Route path={"/home"} element={<Page1 />} />
        <Route path={"/express-one-feelings"} element={<Page2 />} />
        <Route path={"/choose-love"} element={<Page3 />} />
        <Route path={"/approve-love"} element={<Page4 />} />
        <Route path={"/deny-love"} element={<Page5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
