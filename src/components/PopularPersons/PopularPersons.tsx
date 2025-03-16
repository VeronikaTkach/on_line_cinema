import { PopularPersonsType } from "./PopularPersonsTypes";

type PopularPersonsProp = {
  popular: PopularPersonsType;
};

const PopularPersons = ({popular}: PopularPersonsProp) => {
  const { persons} = popular;

  return (
    <div>
      {persons.map((item, index) => {
        if(item.place == 1 or item.place == 2)
        return(
          
        )
        )
      })}
    </div>
  );
};

export default PopularPersons;