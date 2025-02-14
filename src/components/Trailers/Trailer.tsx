import { useState } from "react";
import { Button } from "../Button/Button";
import PlayButton from "../../assets/images/playBtn.svg";

interface MovieProps {
  title: string;
  image: string;
  className?: string;
  overlayButton?: string;
  trailerContainer?: string;
  showTitle?: boolean;  
  onClick?: () => void;
}

export const Trailer: React.FC<MovieProps> = ({
  title,
  image,
  className='',
  overlayButton='',
  trailerContainer='',
  onClick,
  showTitle = true
}) => {
  const [isHovered, setIsHovered] = useState(false); 

  const handleClick = () => {
    if (onClick) {
      onClick(); 
    }
  };


  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={trailerContainer}>
        <img src={image} alt={title} />
        {isHovered && overlayButton && <Button className={overlayButton} img={PlayButton} onClick={handleClick} />}
      </div>
      {showTitle && <h3>{title}</h3>} 
    </div>
  );
};
