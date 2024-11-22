import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { DialogContentProps } from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import RegisterModal from "./RegisterModal";

//  стили нужно перевести на Tailwind CSS и реализовать внешнее сответствие модальных окон макету
//   + адаптировать под разные экраны
//  для кнопоквоспользоваться готовыми стилями (где-то надо будет дополнительно пробросить стиль размеров кнопки)
//  реализовать все состояния кнопок соц. сетей, закрытия модального окна и инпутов
{
  /* MK: у нас есть готовы компонет для модальных окон, поэтому <Dialog></Dialog> и заменить уже на имеющеся решение */
}

const overlayStyles = {
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  position: "fixed" as const,
  inset: 0,
};

const inputStyles = {
  backgroundColor: "#1E2538",
  minWidth: "500px",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  marginBottom: "10px",
};

const contentStyles = {
  backgroundColor: "#191E2E",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderRadius: "10px",
  width: "800px",
  margin: "auto",
  position: "fixed" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const socialStyles = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "10px",
};

export const AuthModal: React.FC = () => {
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  //сюда дописать состояния для почты, пароля, сообщения об ошибке, пример:
  // const [email, setEmail] = useState("");

  //сюда прописать регулярные выражения для почты и пароля
  // const emailRegex =
  // const passwordRegex =

  //здесь прописать логику валидации - это либо
  // const handleSubmit = (e: React.FormEvent) - по нажатию на кнопку проверяются оба поля
  // либо более сложный вариант, когда при вводе поле подсвечено красным до тех пор, пока введенное значение не станет соответствовать Regex

  // Проверка email и пароля
  // if (!emailRegex.test(email) || !passwordRegex.test(password)) {
  //   setErrorMessage("Данные введены неверно");
  //   return;
  // }

  // setErrorMessage("") сброс ошибки, если всё верно введено;
  //здесь handleSubmit заканчивается

  //в html добавить для каждой формы handleSubmit и внизу добавить поле для вывода ошибки из setError

  return (
    <>
      <Dialog.Root open={isAuthOpen} onOpenChange={setAuthOpen}>
        <Dialog.Trigger asChild>
          <button
            style={{ marginLeft: "auto" }}
            onClick={() => setAuthOpen(true)}
          >
            Войти
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay style={overlayStyles} />
          <Dialog.Content style={contentStyles as DialogContentProps["style"]}>
            <Dialog.Title style={{ marginBottom: "10px" }}>Войти</Dialog.Title>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <input
                  style={inputStyles}
                  type="text"
                  placeholder="Логин, почта или телефон"
                  required
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <input
                  style={inputStyles}
                  type="password"
                  placeholder="Пароль"
                  required
                />
              </div>
              <button type="submit" style={{ backgroundColor: "#1E2538" }}>
                Войти
              </button>
              <button
                type="button"
                style={{ backgroundColor: "#1E2538", marginTop: "10px" }}
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
              style={{
                background: "none",
                color: "#1E90FF",
                textDecoration: "underline",
                border: "none",
                cursor: "pointer",
              }}
            >
              Восстановить пароль
            </button>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <Link to="#">
                <button style={socialStyles}>
                  <img src="./src/assets/images/vk.svg" alt="VK icon" />
                </button>
              </Link>
              <Link to="#">
                <button style={socialStyles}>
                  <img src="./src/assets/images/google.svg" alt="Google icon" />
                </button>
              </Link>
              <Link to="#">
                <button style={socialStyles}>
                  <img src="./src/assets/images/yandex.svg" alt="Yandex icon" />
                </button>
              </Link>
            </div>
            <Dialog.Close asChild>
              <button
                style={{ position: "absolute", top: "10px", right: "10px" }}
              >
                X
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setRegisterOpen(false)}
      />
    </>
  );
};
