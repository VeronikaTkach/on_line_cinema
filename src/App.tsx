import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Afisha from "./pages/Afisha";
import Films from "./pages/Films";
import Categories from "./pages/Categories";
import Media from "./pages/Media";
import News from "./pages/News";
import Selections from "./pages/Selections";
import Actors from "./pages/Actors";
import Logo from "./pages/Logo";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* MK: роутинг надо вынести в отдельный файл, так как он будет увеличиваться  */}
        <Routes>
          <Route path="/" element={<Logo />} />
          <Route path="/afisha" element={<Afisha />} />
          <Route path="/media" element={<Media />} />
          <Route path="/films" element={<Films />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/news" element={<News />} />
          <Route path="/selections" element={<Selections />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
