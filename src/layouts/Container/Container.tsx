import React, { ReactNode } from "react";
import styles from "./Container.module.css"; // Импортируем стили как модуль

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`${styles["native-container"]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
