// {TODO: SocialIcons не нужно переиспользовать, нужно переспользовать сами файлы свг, то есть если у нас уже лежит в папке свг с ВК, второй скачивать не нужно
//  Чтобы изменить начальный цвет свг, которые там сейчас лежат, присвой им класс:const clImg = `brightness-0 invert w-6 h-6`; и они станут белыми
// Нужно удалить дублируещие свг}
// ---------------------------------------{done}

// TODO: Нужно использовать готовые стили для кнопок
// ---------------------------------------{done}

// TODO: Здесь не должно быть ккомпонента Портала, он вынесен в отдельный компонент Modal.tsx, нужно его использовать, но не дублировать здесь. 
// Посмотреть пример использования можно в файле PrivacyPolicy.tsx
// ------------------- ------------------ {done}

// TODO: для валидации лучше использовать  useReducer где выноситься состояние
//  в отдельный файл, что избавляет от создания множества состояний с использованием хука useState
//  в файле Login.tsx. Либо использовать zod + react-hook-form, последний вариант чаще используется
// ---------------------------------------{done}

// TODO: это файл компонента формы Логина, тут не должно быть кнопки, которая
//находиться в хедере. то есть эта кнопка не относиться к форме входа и регистраци, хначит ее тут не должно быть
//---------------------------------------for Sofia
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal/Modal";
import { CloseButton } from "./CloseButton";
import { SocialIconsLogin } from "./SocialIconsLogin";
import { Registration } from "./Registration";
import { PasswordReset } from "./PasswordReset";

const inputStyles = `mb-3.5 w-[52%] h-16 bg-grays-input rounded-lg font-qanelas lg:text-[100%] md:text-[75%] sm:text-[30%] text-base pl-6 text-white text-opacity-60 border:none`;
// const buttonStyles = `mb-3.5 w-[52%] h-16 max-w-[600px] bg-grays-input rounded-lg font-qanelas lg:text-[100%] md:text-[75%] sm:text-[30%] text-base text-white border-none hover:bg-yellows-lime hover:text-darks-primary transition-colors duration-300 ease-in-out`;
const buttonStyles = `mb-3.5 w-[52%] max-w-[600px] h-16 font-qanelas border-none lg:text-[100%] md:text-[75%] sm:text-[30%]`;
const contentStyles = `bg-darks-shadow-blue w-[42.45vw] h-auto  rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`;
const titleStyles = `mb-9 font-qanelas font-extrabold text-4xl`;
const wrapperStyles = `flex flex-col items-center justify-start w-full h-full`;

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Заполните поле логина")
    .regex(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^[a-zA-Z0-9_]{3,}$|^(\+?\d{1,3})?(\d{10})$/,
      "Некорректный формат логина"
    ),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const Login: React.FC = () => {
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isResetOpen, setResetOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

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

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await mockLogin(data.email, data.password);
      alert(response.message);
      setAuthOpen(false);
    } catch (error) {
      alert((error as Error).message || "Ошибка при входе");
    }
  };

  return (
    <>
      <button
        className="btn-adaptive-electric sm:h-8 md:h-full"
        onClick={() => setAuthOpen(true)}
      >
        Войти
      </button>

      <Modal isOpen={isAuthOpen} onOpenChange={setAuthOpen} noColor>
        <div onClick={(e) => e.stopPropagation()} className={contentStyles}>
          <div className={wrapperStyles} onClick={(e) => e.stopPropagation()}>
            <CloseButton
              className="ml-auto mt-5 mr-5"
              onClick={() => setAuthOpen(false)}
            />
            <h1 className={titleStyles}>Войти</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center flex-grow justify-start w-full h-auto"
            >
              {errors.email && (
                <div className="text-red-500 mb-4">{errors.email.message}</div>
              )}
              <input
                type="text"
                placeholder="Логин, почта или телефон"
                {...register("email")}
                className={inputStyles}
              />
              {errors.password && (
                <div className="text-red-500 mb-4">
                  {errors.password.message}
                </div>
              )}
              <input
                type="password"
                placeholder="Пароль"
                {...register("password")}
                className={inputStyles}
              />
              <button
                type="submit"
                className={`btn-default-yellow ${buttonStyles}`}
              >
                Войти
              </button>
              <button
                type="button"
                className="mb-3.5 w-[52%] h-16 max-w-[600px] bg-grays-input rounded-lg font-qanelas lg:text-[100%] md:text-[75%] sm:text-[30%] text-base text-white border-none hover:bg-greens-lime hover:text-darks-primary transition-colors duration-300 ease-in-out"
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
        </div>
      </Modal>

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
        wrapperStyles={wrapperStyles}
      />
      <PasswordReset
        isOpen={isResetOpen}
        onOpenChange={setResetOpen}
        inputStyles={inputStyles}
        buttonStyles={buttonStyles}
        titleStyles={titleStyles}
        contentStyles={contentStyles}
        wrapperStyles={wrapperStyles}
      />
    </>
  );
};
