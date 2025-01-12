import { Link } from "react-router-dom";
import { Input } from "../Input/Input";
import { SearchButton } from "../SearchButton/SearchButton";
import { fakeDatabase } from "../../Redux/FakeBD";
import { MoviesListModal } from "../MoviesListModal/MoviesListModal";
import { PersonListModal } from "../PersonListModal/PersonListProps";

const clForm = `form-default-white flex justify-center items-center xl:h-[76px] lg:h-[66px] md:h-[56px]`;

const films = fakeDatabase.movies;
const persons = fakeDatabase.persons;
export const SearchForm = ({ onOpenChange }: { onOpenChange: () => void }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    console.log(target.value);
  };

  return (
    <div
      className="flex fixed top-20 items-start gap-8"
      onClick={(e) => e.stopPropagation()}
    >
      <div className=" flex flex-col items-start gap-2 w-full">
        <form action="#" className={clForm} onChange={handleSubmit}>
          <Input
            placeholder="Что будем искать?"
            isBlack={false}
            plusStyle="mr-2  xl:min-w-[700px] lg:min-w-[550px] min-w-[340px] py-3 py-2 md:px-3 md:placeholder:text-sm md:text-sm lg:px-5 xl:text-lg xl:py-5 xl:px-8 lg:placeholder:text-base"
          />
          <Link
            to="/search"
            className="mr-2.5 xl:max-w-8 md:max-w-5"
            onClick={onOpenChange}
          >
            <img
              src="./src/assets/images/search-param.svg"
              alt="search-param icon"
            />
          </Link>
          <SearchButton
            plusStyle="btn-default-yellow"
            svgStyle="brightness-0"
          />
        </form>
        <div className="overflow-scroll max-h-[70svh] w-full scrollbar-thin scrollbar-thumb-black-500 scrollbar-track-black-300">
          <PersonListModal persons={persons} />
          <MoviesListModal films={films} />
        </div>
      </div>
      <button className="max-w-5" onClick={onOpenChange}>
        <img
          src="./src/assets/images/close.svg"
          alt="close icon"
          className="xl:max-w-7 lg:max-w-5 md:max-w-4"
        />
      </button>
    </div>
  );
};
