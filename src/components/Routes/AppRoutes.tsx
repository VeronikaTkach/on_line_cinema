import { Route, Routes } from "react-router-dom";
import Logo from "../../pages/MainPage";
import Afisha from "../../pages/Afisha";
import Media from "../../pages/Media";
import Films from "../../pages/Films";
import Actors from "../../pages/Actors";
import News from "../../pages/News";
import Selections from "../../pages/Selections";
import Categories from "../../pages/Categories";
import MainPage from "../../pages/MainPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/afisha" element={<Afisha />} />
      <Route path="/media" element={<Media />} />
      <Route path="/films" element={<Films />} />
      <Route path="/actors" element={<Actors />} />
      <Route path="/news" element={<News />} />
      <Route path="/selections" element={<Selections />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
};

export default AppRoutes;
