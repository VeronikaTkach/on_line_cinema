import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Modal } from "../Modal/Modal";
import { PasswordConfirm } from "./PasswordConfirm";
import { CloseButton } from "./CloseButton";

const resetPasswordSchema = z.object({
  resetEmail: z
    .string()
    .min(1, "Поле 'Почта или номер телефона' обязательно для заполнения.")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Введите корректный email или номер телефона."
    ),
  resetCode: z
    .string()
    .min(1, "Поле 'Полученный код' обязательно для заполнения."),
});

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

interface PasswordResetProps {
  isOpen: boolean;
  inputStyles: string;
  buttonStyles: string;
  titleStyles: string;
  contentStyles: string;
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
  wrapperStyles,
}) => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const handleEmailSubmit = (data: ResetPasswordFormData) => {
    console.log("Email submit:", data);
    setStep(2);
  };

  const handleCodeSubmit = (data: ResetPasswordFormData) => {
    console.log("Code submit:", data);
    setStep(2);
  };

  const handleConfirmSubmit = () => {
    setStep(1);
    onOpenChange(false);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} noColor>
      <div className={contentStyles} onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col justify-center">
          <CloseButton
            onClick={() => onOpenChange(false)}
            className="ml-auto mt-5 mr-5"
          />

          <div className="flex justify-center">
            <h1 className={titleStyles}>Восстановить пароль</h1>
          </div>

          {step === 1 && (
            <>
              <form
                onSubmit={handleSubmit(handleEmailSubmit)}
                className={wrapperStyles}
              >
                {errors.resetEmail && (
                  <div style={{ color: "red", marginBottom: "8px" }}>
                    {errors.resetEmail.message}
                  </div>
                )}
                <input
                  {...register("resetEmail")}
                  className={inputStyles}
                  type="text"
                  placeholder="Почта или номер телефона"
                />

                {errors.resetCode && (
                  <div style={{ color: "red", marginBottom: "8px" }}>
                    {errors.resetCode.message}
                  </div>
                )}
                <div className="flex w-[52%] h-16 gap-3 mb-3.5">
                  <button
                    type="submit"
                    className={`btn-default-electric ${buttonStyles}`}
                    onClick={() => handleCodeSubmit}
                  >
                    Отправить
                  </button>

                  <input
                    {...register("resetCode")}
                    className={inputStyles}
                    type="text"
                    placeholder="Полученный код"
                  />
                </div>

                <button
                  type="submit"
                  className={`btn-default-yellow ${buttonStyles}`}
                  style={{ marginBottom: "59px" }}
                >
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
      </div>
    </Modal>
  );
};
