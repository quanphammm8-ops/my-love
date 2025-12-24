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
import Page6 from "./pages/Page6";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function BackgroundMusic() {
  const location = useLocation();
  const [audio] = useState(() => new Audio(music));

  useEffect(() => {
    audio.loop = true;

    const MUSIC_ROUTES = [
      "/home",
      "/express-one-feelings",
      "/choose-love",
      "/approve-love",
      "/deny-love",
    ];

    const shouldPlay = MUSIC_ROUTES.includes(location.pathname);

    if (shouldPlay) {
      audio.play().catch(() => {
        console.log("Autoplay blocked, waiting for user interaction");
      });
    } else {
      audio.pause();
      audio.currentTime = 0; 
    }

    const handleUserInteraction = () => {
      if (shouldPlay) {
        audio.play().catch(() => {});
      }
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, [location.pathname, audio]);

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
        <Route path={"/merry-christmas"} element={<Page6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
