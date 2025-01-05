import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import CloseButton from "./CloseButton";

const labelStyles =
  "mt-1 font-qanelas lg:text-[100%] md:text-[75%] sm:text-[30%] text-sm text-white lg:whitespace-nowrap  md:whitespace-normal sm:whitespace-normal";
const checkboxStyles = "mr-2 w-5 h-5rounded-lg  accent-yellows-lime";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  inputStyles: string;
  buttonStyles: string;
  titleStyles: string;
  contentStyles: string;
  overlayStyles: string;
  wrapperStyles: string;
}

const Registration: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onBack,
  inputStyles,
  buttonStyles,
  titleStyles,
  contentStyles,
  overlayStyles,
  wrapperStyles,
}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isPrivacyChecked, setPrivacyChecked] = useState(false);
  const [isDataProcessingChecked, setDataProcessingChecked] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex =
      /^(?:\+?\d{1,3})?[ ]?\(?\d{1,4}\)?[ ]?\d{1,4}[ ]?\d{1,4}[ ]?\d{1,4}$/;

    if (!phone.trim()) {
      newErrors.push("Поле 'телефон' обязательно для заполнения.");
    } else if (!phoneRegex.test(phone)) {
      newErrors.push("Некорректный формат телефона.");
    }

    if (!email.trim()) {
      newErrors.push("Поле 'email' обязательно для заполнения.");
    } else if (!emailRegex.test(email)) {
      newErrors.push("Некорректный формат почты.");
    }

    if (login.length < 3) {
      newErrors.push("Логин должен содержать минимум 3 символа.");
    }

    if (password !== confirmPassword) {
      newErrors.push("Пароли не совпадают.");
    }

    if (!isPrivacyChecked) {
      newErrors.push("Необходимо согласиться с политикой конфиденциальности.");
    }
    if (!isDataProcessingChecked) {
      newErrors.push(
        "Необходимо согласиться на обработку персональных данных."
      );
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      setErrors([]);
      setLogin("");
      setPassword("");
      setConfirmPassword("");
      setPhone("");
      setEmail("");
      setPrivacyChecked(false);
      setDataProcessingChecked(false);
      onClose();
      alert("Вы успешно зарегистрированы!")
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={overlayStyles} />
        <Dialog.Content
          className={contentStyles}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between m-5">
            <button
              onClick={onBack}
              className="font-qanelas font-bold text-base hover:text-yellows-butter"
            >
              Назад
            </button>
            <CloseButton onClick={onClose} />
          </div>
          <div className="flex justify-center">
            <Dialog.Title className={titleStyles}>
              Зарегистрироваться
            </Dialog.Title>
          </div>
          <Dialog.Description />

          <form onSubmit={handleSubmit} className={wrapperStyles}>
            <input
              className={inputStyles}
              type="text"
              placeholder="Придумайте логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              className={inputStyles}
              type="password"
              placeholder="Придумайте пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className={inputStyles}
              type="password"
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              className={inputStyles}
              type="text"
              placeholder="Номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className={inputStyles}
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex flex-col items-start gap-2 mb-3 w-[52%] h-auto">
              <label className={labelStyles}>
                <input
                  className={checkboxStyles}
                  type="checkbox"
                  checked={isPrivacyChecked}
                  onChange={(e) => setPrivacyChecked(e.target.checked)}
                />
                Соглашаюсь на условия{" "}
                <a
                  href="#"
                  className="font-qanelas lg:text-[100%] md:text-[75%] sm:text-[30%] text-sm text-white underline underline-offset-4 hover:text-yellows-butter"
                >
                  политики конфиденциальности
                </a>
              </label>
              <label className={labelStyles}>
                <input
                  className={checkboxStyles}
                  type="checkbox"
                  checked={isDataProcessingChecked}
                  onChange={(e) => setDataProcessingChecked(e.target.checked)}
                />
                Соглашаюсь на обработку персональных данных
              </label>
            </div>

            {errors.length > 0 && (
              <div style={{ color: "red", marginBottom: "10px" }}>
                {errors.map((error, index) => (
                  <div key={index}>{error}</div>
                ))}
              </div>
            )}

            <button type="submit" className={`${buttonStyles} mb-24`}>
              Зарегистрироваться
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Registration;
