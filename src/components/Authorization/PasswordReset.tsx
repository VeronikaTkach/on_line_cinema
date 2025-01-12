import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { PasswordConfirm } from "./PasswordConfirm";
import CloseButton from "./CloseButton";

interface PasswordResetProps {
  isOpen: boolean;
  inputStyles: string;
  buttonStyles: string;
  titleStyles: string;
  contentStyles: string;
  overlayStyles: string;
  wrapperStyles: string;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PasswordReset: React.FC<PasswordResetProps> = ({
  isOpen,
  onOpenChange,
  inputStyles,
  buttonStyles,
  titleStyles,
  contentStyles,
  overlayStyles,
  wrapperStyles,
}) => {
  const [step, setStep] = useState(1);
  const [resetEmail, setResetEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleEmailSubmit = () => {
    const newErrors: string[] = [];
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex =
      /^(?:\+?\d{1,3})?[ ]?\(?\d{1,4}\)?[ ]?\d{1,4}[ ]?\d{1,4}[ ]?\d{1,4}$/;

    if (!resetEmail.trim()) {
      newErrors.push(
        "Поле 'Почта или номер телефона' обязательно для заполнения."
      );
    } else if (!emailRegex.test(resetEmail) && !phoneRegex.test(resetEmail)) {
      newErrors.push("Введите корректный email или номер телефона.");
    }

    setErrors(newErrors);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetCode.trim()) {
      setErrors(["Поле 'Полученный код' обязательно для заполнения."]);
    } else {
      setErrors([]);
      setStep(2);
    }
  };

  const handleConfirmSubmit = () => {
    setStep(1);
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={overlayStyles} />
        <Dialog.Content className={contentStyles}>
          <div className="flex  flex-col justify-center">
            <CloseButton
              onClick={() => onOpenChange(false)}
              className="ml-auto mt-5 mr-5"
            />

            <div className="flex justify-center">
              <Dialog.Title className={titleStyles}>
                Восстановить пароль
              </Dialog.Title>
            </div>
            <Dialog.Description />
            {step === 1 && (
              <>
                <form onSubmit={handleCodeSubmit} className={wrapperStyles}>
                  <input
                    className={inputStyles}
                    type="text"
                    placeholder="Почта или номер телефона"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                  />
                  <div className="flex w-[52%] h-16 gap-3 mb-3.5">
                    <button
                      type="button"
                      className={`${buttonStyles} hover:bg-[#3657CB]`}
                      onClick={handleEmailSubmit}
                    >
                      Отправить
                    </button>

                    <input
                      className={inputStyles}
                      type="text"
                      placeholder="Полученный код"
                      value={resetCode}
                      onChange={(e) => setResetCode(e.target.value)}
                    />
                  </div>
                  {errors.length > 0 && (
                    <div>
                      {errors.map((error, index) => (
                        <div key={index}>{error}</div>
                      ))}
                    </div>
                  )}
                  <button type="submit" className={`${buttonStyles} mb-14`}>
                    Далее
                  </button>
                </form>
              </>
            )}

            {step === 2 && (
              <PasswordConfirm
                onSubmit={handleConfirmSubmit}
                inputStyles={inputStyles}
                buttonStyles={buttonStyles}
                wrapperStyles={wrapperStyles}
              />
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
