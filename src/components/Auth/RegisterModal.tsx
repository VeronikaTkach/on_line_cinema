import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { DialogContentProps } from "@radix-ui/react-dialog";

// МК: здесь нужно сделать все тоже самое, что и в файле Auth.tsx, к слову, название Login.tsx подходит лучше для окна входа.

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

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
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

    if (login.length < 3) {
      newErrors.push("Логин должен содержать минимум 3 символа");
    }

    if (password !== confirmPassword) {
      newErrors.push("Пароли не совпадают");
    }

    if (!isPrivacyChecked) {
      newErrors.push("Необходимо согласиться с политикой конфиденциальности");
    }
    if (!isDataProcessingChecked) {
      newErrors.push("Необходимо согласиться на обработку персональных данных");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      setErrors([]);
      onClose();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay style={overlayStyles} />
        <Dialog.Content style={contentStyles as DialogContentProps["style"]}>
          <Dialog.Title style={{ marginBottom: "10px" }}>
            Зарегистрироваться
          </Dialog.Title>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              style={inputStyles}
              type="text"
              placeholder="Придумайте логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
            <input
              style={inputStyles}
              type="password"
              placeholder="Придумайте пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              style={inputStyles}
              type="password"
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <input
              style={inputStyles}
              type="text"
              placeholder="Номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              style={inputStyles}
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label
              style={{ display: "flex", alignItems: "center", margin: "5px 0" }}
            >
              <input
                type="checkbox"
                checked={isPrivacyChecked}
                onChange={(e) => setPrivacyChecked(e.target.checked)}
              />{" "}
              Соглашаюсь на условия политики конфиденциальности
            </label>
            <label
              style={{ display: "flex", alignItems: "center", margin: "5px 0" }}
            >
              <input
                type="checkbox"
                checked={isDataProcessingChecked}
                onChange={(e) => setDataProcessingChecked(e.target.checked)}
              />{" "}
              Соглашаюсь на обработку персональных данных
            </label>

            {errors.length > 0 && (
              <div style={{ color: "red", marginBottom: "10px" }}>
                {errors.map((error, index) => (
                  <div key={index}>{error}</div>
                ))}
              </div>
            )}

            <button
              type="submit"
              style={{ backgroundColor: "#1E2538", marginTop: "10px" }}
            >
              Зарегистрироваться
            </button>
          </form>
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
  );
};

export default RegisterModal;
