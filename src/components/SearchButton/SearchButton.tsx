const clButton = `btn-default-white xl:py-5 xl:px-5 lg:py-4 lg:px-4  md:py-3.5 md:px-3.5 py-3 px-3`;
const clImg = `xl:max-h-4 xl:max-w-4 lg:max-h-3 lg:max-w-3 max-h-2.5 max-w-2.5`;
export const SearchButton = () => {
  return (
    <button className={clButton}>
      <img
        className={clImg}
        src="./src/assets/images/search.svg"
        alt="Search icon"
      />
    </button>
  );
};
