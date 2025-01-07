import { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard/FilmCard";

import { FilmType } from "../components/FilmCard/filmTypes";
import Container from "../layouts/Container/Container";
import { fakeDatabase } from "../Redux/FakeBD";

const dummyFilms = fakeDatabase.movies;

const Films = () => {
  const [films, setFilms] = useState<FilmType[]>(dummyFilms);

  const [visibleCount, setVisibleCount] = useState(8);

  const filmsCount = (): number => {
    if (window.innerWidth >= 1280) return 8; // xl
    if (window.innerWidth >= 768) return 9; // md
    return 6; // sm
  };

  useEffect(() => {
    const handleResize = () => setVisibleCount(filmsCount());

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showMoreFilms = () => {
    setVisibleCount((prevCount) => prevCount + filmsCount());
  };

  return (
    <Container className="mb-14">
      <h2>Films</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full max-w-full box-border">
        {films.slice(0, visibleCount).map((item) => {
          return <FilmCard key={item.id} film={item} />;
        })}
      </div>
      <button
        className="btn-adaptive-white-counter mt-[50px]"
        onClick={showMoreFilms}
      >
        Все новинки
      </button>
    </Container>
  );
};
export default Films;
