import { Link } from "react-router-dom";
import { Input } from "../Input/Input";
import { SearchButton } from "../SearchButton/SearchButton";

const clForm = `form-default-white flex justify-center items-center`;

export const SearchForm = ({ onOpenChange }: { onOpenChange: () => void }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    console.log(target.value);
  };

  return (
    <div
      className="flex items-center gap-8"
      onClick={(e) => e.stopPropagation()}
    >
      <form action="#" className={clForm} onChange={handleSubmit}>
        <Input
          placeholder="Что будем искать?"
          isBlack={false}
          plusStyle="mr-2  min-w-[700px]"
        />
        <Link to="/search" className="mr-2.5" onClick={onOpenChange}>
          <img
            src="./src/assets/images/search-param.svg"
            alt="search-param icon"
          />
        </Link>
        <SearchButton plusStyle="btn-default-yellow" svgStyle="brightness-0" />
      </form>
      <button className="max-w-5" onClick={onOpenChange}>
        <img src="./src/assets/images/close.svg" alt="close icon" />
      </button>
    </div>
  );
};
