import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Registration from "./Registration";
import { PasswordReset } from "./PasswordReset";
import SocialIconsLogin from "./SocialIconsLogin";
import CloseButton from "./CloseButton";

const inputStyles = `mb-3.5 w-[52%] h-16 bg-grays-input rounded-lg font-qanelas lg:text-[100%] md:text-[75%] sm:text-[30%] text-base pl-6 text-white text-opacity-60 border:none`;
const buttonStyles = `mb-3.5 w-[52%] h-16 max-w-[600px] bg-grays-input rounded-lg font-qanelas lg:text-[100%] md:text-[75%] sm:text-[30%] text-base text-white border-none hover:bg-yellows-lime hover:text-darks-primary transition-colors duration-300 ease-in-out`;
const overlayStyles = `bg-black/30 fixed inset-0 backdrop-blur-[2px]`;
const contentStyles = `bg-darks-shadow-blue w-[42.45vw] h-auto  rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`;
const titleStyles = `mb-9 font-qanelas font-extrabold text-4xl`;
const wrapperStyles = `flex flex-col items-center justify-start w-full h-full`;
export const Login: React.FC = () => {
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isResetOpen, setResetOpen] = useState(false);

  const mockLogin = async (login: string, password: string) => {
    const serverData = {
      username: "bob",
      email: "bob@bob.com",
      phone: "1234567890",
      password: "12345678",
    };

    if (
      (login === serverData.username ||
        login === serverData.email ||
        login === serverData.phone) &&
      password === serverData.password
    ) {
      return { message: "Успешный вход", token: "mockToken123" };
    }

    throw new Error("Неверные логин или пароль");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loginRegex = /^[a-zA-Z0-9_]{3,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(\+?\d{1,3})?(\d{10})$/;
    const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

    if (!email || !password) {
      setErrorMessage("Заполните все поля.");
      return;
    }
    if (
      !emailRegex.test(email) &&
      !loginRegex.test(email) &&
      !phoneRegex.test(email)
    ) {
      setErrorMessage("Некорректный формат логина");
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage("Некорректный формат пароля");
      return;
    }

    try {
      const response = await mockLogin(email, password);
      alert(response.message);
      setErrorMessage("");
      setAuthOpen(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      setErrorMessage((error as Error).message || "Ошибка при входе");
    }
  };


  return (
    <>
      <button style={{ marginLeft: "auto" }} onClick={() => setAuthOpen(true)}>
        Войти
      </button>

      <Dialog.Root open={isAuthOpen} onOpenChange={setAuthOpen}>
        <Dialog.Trigger asChild />
        <Dialog.Portal>
          <Dialog.Overlay className={overlayStyles} />
          <Dialog.Content className={contentStyles}>
            <div className={wrapperStyles} onClick={(e) => e.stopPropagation()}>
              <CloseButton
                className="ml-auto mt-5 mr-5"
                onClick={() => setAuthOpen(false)}
              />
              <Dialog.Title className={titleStyles}>Войти</Dialog.Title>
              <Dialog.Description />
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center flex-grow justify-start  w-full h-auto"
              >
                <input
                  type="text"
                  placeholder="Логин, почта или телефон"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputStyles}
                />
                <input
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputStyles}
                />
                {errorMessage && (
                  <div className="text-red-500 mb-4">{errorMessage}</div>
                )}
                <button type="submit" 
                className={buttonStyles}>
               
                  Войти
                </button>
                <button
                  type="button"
                  className={buttonStyles}
                  onClick={() => {
                    setAuthOpen(false);
                    setRegisterOpen(true);
                  }}
                >
                  Зарегистрироваться
                </button>
              </form>
              <button
                type="button"
                className="mb-5 font-qanelas text-base text-blues-cobalt underline underline-offset-4"
                onClick={() => {
                  setAuthOpen(false);
                  setResetOpen(true);
                }}
              >
                Восстановить пароль
              </button>

              <SocialIconsLogin />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Registration
        isOpen={isRegisterOpen}
        onClose={() => setRegisterOpen(false)}
        onBack={() => {
          setRegisterOpen(false);
          setAuthOpen(true);
        }}
        inputStyles={inputStyles}
        buttonStyles={buttonStyles}
        titleStyles={titleStyles}
        contentStyles={contentStyles}
        overlayStyles={overlayStyles}
        wrapperStyles={wrapperStyles}
      />
      <PasswordReset
        isOpen={isResetOpen}
        onOpenChange={setResetOpen}
        inputStyles={inputStyles}
        buttonStyles={buttonStyles}
        titleStyles={titleStyles}
        contentStyles={contentStyles}
        overlayStyles={overlayStyles}
        wrapperStyles={wrapperStyles}
      />
    </>
  );
};

//  стили нужно перевести на Tailwind CSS и реализовать внешнее сответствие модальных окон макету
//   + адаптировать под разные экраны
//  для кнопоквоспользоваться готовыми стилями (где-то надо будет дополнительно пробросить стиль размеров кнопки)
//  реализовать все состояния кнопок соц. сетей, закрытия модального окна и инпутов
{
}
