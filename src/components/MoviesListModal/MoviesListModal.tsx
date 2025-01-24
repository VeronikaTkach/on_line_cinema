import { Rating } from "../Rating/Rating";
import { MoviesListProps } from "./MoviesListModal.props";

export const MoviesListModal = ({ films }: MoviesListProps) => {
  return (
    <>
      <h2 className="xl:text-xl font-semibold text-lg">Фильмы</h2>
      <ul className="w-full">
        {films.map((movie) => (
          <li
            key={movie.id}
            className="flex w-full justify-between items-center bg-darks-obsidian  p-4 mb-2 rounded-[10px] cursor-pointer "
          >
            <div className="flex gap-5 lg:gap-3 items-center">
              <img
                src={movie.image}
                className="max-w-[79px] max-h-[105px] lg:max-w-[69px] rounded-md"
              ></img>

              <div>
                <h3 className="xl:text-xl font-bold text-base">
                  {movie.title}
                </h3>
                <p className="text-sm opacity-70">Рейтинг: {movie.rating}</p>
                <p className="text-yellows-lime text-xs font-normal">
                  Жанры: {movie.genre.join(", ")}
                </p>
              </div>
            </div>
            <Rating rating={Number(movie.rating)} />
          </li>
        ))}
      </ul>
    </>
  );
};
