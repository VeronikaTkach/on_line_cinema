interface ButtonProps {
  className?: string;
  text?: string;
  img?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  className = "",
  text = "",
  img = "",
  onClick = () => {},
}) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
      {img && <img src={img} />}
    </button>
  );
};
