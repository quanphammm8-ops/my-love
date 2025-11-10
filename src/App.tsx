import { useEffect, useState } from "react";
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
import music from "./assets/music.mp3";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function BackgroundMusic() {
  const [audio] = useState(() => new Audio(music));

  useEffect(() => {
    const tryPlay = () => {
      audio.loop = true;
      audio.play().catch(() => {
        console.log("Autoplay block, interact waiting...");
      });
    };

    tryPlay();

    const handleUserInteraction = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", handleUserInteraction);
    };
    window.addEventListener("click", handleUserInteraction);

    return () => {
      audio.pause();
      window.removeEventListener("click", handleUserInteraction);
    };
  }, [audio]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BackgroundMusic />
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
