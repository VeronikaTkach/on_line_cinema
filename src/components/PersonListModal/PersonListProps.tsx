import { PersonListProps } from "./PersonListProps.props";

export const PersonListModal = ({ persons }: PersonListProps) => {
  return (
    <>
      <h2 className="xl:text-xl font-semibold text-lg">Персоны</h2>
      <ul>
        {persons.map((person) => (
          <li
            key={person.id}
            className="flex justify-between items-center bg-darks-obsidian  p-4 mb-2 rounded-[10px] cursor-pointer "
          >
            <div className="flex gap-5 lg:gap-3 items-center">
              <img
                src={person.image}
                className="max-w-[79px] max-h-[105px] lg:max-w-[69px] rounded-md"
              ></img>

              <div>
                <h3 className="xl:text-xl font-bold text-base">
                  {person.name}
                </h3>
                <p className="text-sm opacity-70">{person.englishName}</p>
                <p className="text-yellows-lime text-xs font-normal">
                  Жанры: {person.genres.join(", ")}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
