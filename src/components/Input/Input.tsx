import { InputProps } from "./Input.props";

export const Input = ({ placeholder, isBlack, plusStyle }: InputProps) => {
  return (
    <input
      className={
        plusStyle + " " + (isBlack ? "" : `input-default-white w-full`)
      }
      type="text"
      placeholder={placeholder}
    />
  );
};

// дописать стили для блэк формы
