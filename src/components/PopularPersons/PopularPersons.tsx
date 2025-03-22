import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PopularPersons = () => {
  const { actors } = useSelector((state) => state);
  const [personsArray, setPersonsArray] = useState(actors);
  console.log(personsArray);
  const firstArray = personsArray.actors.slice(0, 2);
  console.log(firstArray);
  const secondArray = personsArray.actors.slice(2, 6);
  console.log(secondArray);
  return (
    <div className=" flex justify-center flex-col items-center mb-[50px]">
      <div className="flex flex-row items-center justify-between w-[80%]">
        <p className="text-[65px] font-bold">Популярные персоны</p>
        <div>
          <button>За год</button>
          <button className="ml-[40px]">За месяц</button>
          <button className="ml-[40px]">За неделю</button>
        </div>
      </div>
      <div className="mt-[55px] w-[80%] flex justify-between">
        <div className="w-[60%] flex justify-between ">
          {firstArray.map((item, index) => {
            return (
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className=" bg-cover flex flex-col mx-auto bg-no-repeat h-[23vw] w-[23vw] rounded-md"
              >
                <p className="text-left ml-7px font-[15px] ml-[10px] mt-[10px] text-[#F2F60F]">
                  {item.id}-ое место
                </p>
                <div className="mb-[30px] mt-auto text-left ml-[33px]">
                  <p className="text-[27px] font-bold">{item.name}</p>
                  <p className="text-[#FFFFFF59] font-semibold text-[20px]">
                    {item.englishName}
                  </p>
                  <p className="text-[#F2F60F] font-medium text-[15px] mt-[10px] ">
                    {item.age} лет
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[38%] bg-[#1B2133] rounded-md pl-[20px] pr-[20px] grid">
          {secondArray.map((item, index) => {
            return (
              <div className="flex justify-between items-center border-b-[2px] border-[#1E2538] ">
                <div>
                  <p className="text-[20px] text-left font-bold ">
                    {item.name}
                  </p>
                  <p className="text-[15px] text-[#3B486B] text-left font-semibold">
                    {item.englishName}
                  </p>
                  <p className="text-[14px] text-[#F2F60F] text-left mt-[10px] font-normal">
                    {item.age} лет
                  </p>
                </div>
                <p>{item.id}-ое место</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularPersons;
