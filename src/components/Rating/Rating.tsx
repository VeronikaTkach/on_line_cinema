import { RatingProps } from "./Rating.props";

export const Rating = ({ rating, className }: RatingProps) => {
  return (
    <div
      className={
        `lg:text-[18px] right-3 bg-[#4BCB36] text-[12px] py-1 px-3 rounded-md` +
        " " +
        className
      }
    >
      {rating}
    </div>
  );
};
