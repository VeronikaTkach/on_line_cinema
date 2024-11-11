import { FilmType } from "./filmTypes";

type FilmProp = {
  film: FilmType;
};

const FilmCard = ({ film }: FilmProp) => {
  const { title, rating, genre, image } = film;

  return (
    <div className="max-w-full w-full relative grid gap-2">
      <div className="w-full relative  aspect-[339/462]">
        <img
          className="w-full h-full object-cover rounded-xl absolute top-0 left-0"
          src={image}
          alt="film-img"
        />
      </div>

      <div className="absolute top-3 lg:text-[18px] right-3 bg-[#4BCB36] text-[12px] py-1 px-3 rounded-md">
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
            <p key={item} className="text-[15px] text-[#F2F60F] font-thin mr-2">
              {formattedItem}
              {index < genre.length - 1 ? "," : ""}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FilmCard;
