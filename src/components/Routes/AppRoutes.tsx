import React from "react";
import { Route, Routes } from "react-router-dom";
import Logo from "../../pages/Logo";
import Afisha from "../../pages/Afisha";
import Media from "../../pages/Media";
import Films from "../../pages/Films";
import Actors from "../../pages/Actors";
import News from "../../pages/News";
import Selections from "../../pages/Selections";
import Categories from "../../pages/Categories";

const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;
