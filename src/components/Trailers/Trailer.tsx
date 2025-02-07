import { useState } from "react";


interface MovieProps {
  title: string;
  image: string;
  className?: string;
  overlayButton?: string;
  trailerContainer?: string;
}

export const Trailer: React.FC<MovieProps> = ({
  title,
  image,
  className,
  overlayButton,
  trailerContainer,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={trailerContainer}>
        <img src={image} alt={title} />
        {isHovered && (
          <button className={overlayButton}>
            <img
              src="./src/assets/images/playBtn.svg"
              alt="Play"              
            />
          </button>
        )}
      </div>
      <h3>{title}</h3>
    </div>
  );
};
