import React, { useState } from "react";
import { Modal } from "../Modal/Modal";

interface PrivacyPolicyProps {
  text: string;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ text }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const toggleOpenPopUp = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="text-grays-pale text-opacity-75 text-center lg:text-sm text-xs font-light">
      <p className="xl:mb-7 lg:mb-5 md:mb-3 mb-2">
        2020 © Kinoarea. Все права защищены
      </p>
      <a
        className="relative cursor-pointer after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[1px] after:bg-current after:transition-all hover:after:bg-opacity-60"
        onClick={handleClick}
      >
        {text}
      </a>
      <Modal
        onOpenChange={toggleOpenPopUp}
        isOpen={isPopupOpen}
        noColor={false}
      >
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="px-6 py-6 sm:px-8 sm:py-8 md:px-[50px] md:py-[40px] lg:px-[150px] lg:py-[41px] bg-darks-primary text-white rounded-lg shadow-lg text-center text-xs md:text-lg font-medium">
            <h2 className="mb-4 sm:mb-6 md:mb-[30px] lg:mb-[50px]">
              Функционал в разработке, будет доступен позже.
            </h2>
            <button className="px-2 py-1 sm:px-5 sm:py-1 md:px-6 md:py-2 lg:px-8 lg:py-2 bg-blues-cobalt text-white border-2 border-blues-cobalt rounded-lg shadow-[0_0_7px_0_rgba(72,113,255,0.6)] hover:border-white text-xs md:text-lg">
              Закрыть
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
