import { HoverContainer } from "../HoverCardWithContent/HoverCardWithContent";
import { Button } from "../Button/Button";
import PlayButton from "../../assets/images/playBtn.svg";

interface TrailerProps {
  title: string;
  image: string;
  className?: string;
  overlayButton?: string;
  trailerContainer?: string;
  showTitle?: boolean;
  onClick?: () => void;
}

export const Trailer: React.FC<TrailerProps> = ({
  title,
  image,
  className = "",
  overlayButton = "",
  trailerContainer = "",
  onClick,
  showTitle = true,
}) => {
  return (
    <div className={className}>
      <HoverContainer
        className={trailerContainer}
        onHoverContent={
          overlayButton && (
            <Button
              className={overlayButton}
              img={PlayButton}
              onClick={onClick}
            />
          )
        }
      >
        <img src={image} alt={title} />
      </HoverContainer>
      {showTitle && <h3 className={title}>{title}</h3>}
    </div>
  );
};
