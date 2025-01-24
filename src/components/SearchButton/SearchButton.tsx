import { SearchButtonProps } from "./SearchButton.props";

const clButton = `btn-default-white xl:py-[20px] xl:px-[20px] lg:py-4 lg:px-4  md:py-3.5 md:px-3.5 py-3 px-3`;
const clImg = `xl:max-h-4 xl:max-w-4 lg:max-h-3 lg:max-w-3 max-h-2.5 max-w-2.5 `;

export const SearchButton = ({
  onClick,
  plusStyle,
  svgStyle,
}: SearchButtonProps) => {
  return (
    <button className={clButton + " " + plusStyle} onClick={onClick}>
      <img
        className={clImg + svgStyle}
        src="./src/assets/images/search.svg"
        alt="Search icon"
      />
    </button>
  );
};
