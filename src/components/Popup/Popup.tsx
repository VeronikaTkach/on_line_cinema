import React from "react";
import "./Popup.css";

interface PopupProps {
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Функционал в разработке, будет доступен позже.</h2>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};
