import { InputProps } from "./Input.props";

export const Input = ({ placeholder, isBlack, plusStyle }: InputProps) => {
  return (
    <input
      className={(isBlack ? "" : `input-default-white`) + " " + plusStyle}
      type="text"
      placeholder={placeholder}
    />
  );
};

// дописать стили для блэк формы
