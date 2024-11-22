import { FilmType } from "./filmTypes";

type FilmProp = {
  film: FilmType;
};

const FilmCard = ({ film }: FilmProp) => {
  const { title, rating, genre, image } = film;

  return (
    // не совсем понимаю почему max-w-full w-full - нужна же адаптивность под все размеры.  эндпоинты прописаны в файле tailwind.config.cjs
    <div className="max-w-full w-full relative grid gap-2">
      <div className="w-full relative aspect-[339/462] group">
        <img
          className="w-full h-full object-cover rounded-xl absolute top-0 left-0"
          src={image}
          alt="film-img"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <button className="btn-adaptive-white">Карточка фильма</button>
        </div>
      </div>
      <div className="absolute top-3 lg:text-[18px] right-3 bg-[#4BCB36] text-[12px] py-1 px-3 rounded-md z-20">
        {rating}
      </div>

      <h4 className=" text-left text-[18px] font-[700]">{title}</h4>

      <div className="flex">
        {genre.map((item, index) => {
          const formattedItem =
            index === 0
              ? item.charAt(0).toUpperCase() + item.slice(1)
              : item.toLowerCase();

          return (
            <button
              key={item}
              className="text-[15px] text-[#F2F60F] font-thin mr-2"
            >
              {formattedItem}
              {index < genre.length - 1 ? "," : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilmCard;
