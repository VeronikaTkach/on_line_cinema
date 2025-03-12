import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal/Modal";
import { CloseButton } from "./CloseButton";

const labelStyles =
  "mt-1 font-qanelas lg:text-[100%] md:text-[75%] sm:text-[30%] text-sm text-white lg:whitespace-nowrap  md:whitespace-normal sm:whitespace-normal";
const checkboxStyles = "mr-2 w-5 h-5 rounded-lg  accent-yellows-lime";

const registrationSchema = z
  .object({
    login: z.string().min(3, "Логин должен содержать минимум 3 символа."),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов."),
    confirmPassword: z
      .string()
      .min(6, "Пароль должен содержать минимум 6 символов."),
    phone: z
      .string()
      .regex(
        /^(?:\+?\d{1,3})?[ ]?\(?\d{1,4}\)?[ ]?\d{1,4}[ ]?\d{1,4}[ ]?\d{1,4}$/,
        "Некорректный формат телефона."
      ),
    email: z.string().email("Некорректный формат почты."),
    privacy: z
      .boolean()
      .refine(
        (val) => val === true,
        "Необходимо согласиться с политикой конфиденциальности."
      ),
    dataProcessing: z
      .boolean()
      .refine(
        (val) => val === true,
        "Необходимо согласиться на обработку персональных данных."
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  inputStyles: string;
  buttonStyles: string;
  titleStyles: string;
  contentStyles: string;
  wrapperStyles: string;
}

export const Registration: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onBack,
  inputStyles,
  buttonStyles,
  titleStyles,
  contentStyles,
  wrapperStyles,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const formatPhone = (value: string) => {
    let formatted = value.replace(/\D/g, "");

    if (formatted.startsWith("8")) {
      formatted = "+7" + formatted.slice(1);
    } else if (!formatted.startsWith("7")) {
      formatted = "+7" + formatted;
    } else {
      formatted = "+" + formatted;
    }
    return formatted;
  };

  const onSubmit = (data: RegistrationFormData) => {
    console.log("Submitted data:", data);
    onClose();
    alert("Вы успешно зарегистрированы!");
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} noColor>
      <div className={contentStyles} onClick={(e) => e.stopPropagation()}>
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
          <h1 className={titleStyles}>Зарегистрироваться</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={wrapperStyles}>
          {errors.login && (
            <div style={{ color: "red", marginBottom: "8px" }}>
              {errors.login.message}
            </div>
          )}
          <input
            {...register("login")}
            className={inputStyles}
            type="text"
            placeholder="Придумайте логин"
          />
          {errors.password && (
            <div style={{ color: "red", marginBottom: "8px" }}>
              {errors.password.message}
            </div>
          )}
          <input
            {...register("password")}
            className={inputStyles}
            type="password"
            placeholder="Придумайте пароль"
          />
          {errors.confirmPassword && (
            <div style={{ color: "red", marginBottom: "8px" }}>
              {errors.confirmPassword.message}
            </div>
          )}
          <input
            {...register("confirmPassword")}
            className={inputStyles}
            type="password"
            placeholder="Повторите пароль"
          />
          {errors.phone && (
            <div style={{ color: "red", marginBottom: "8px" }}>
              {errors.phone.message}
            </div>
          )}
          <input
            {...register("phone")}
            className={inputStyles}
            type="text"
            placeholder="Номер телефона"
            onBlur={(e) => {
              const formattedPhone = formatPhone(e.target.value);
              if (formattedPhone !== "+7") {
                setValue("phone", formattedPhone, { shouldValidate: true });
              }
            }}
          />
          {errors.email && (
            <div style={{ color: "red", marginBottom: "8px" }}>
              {errors.email.message}
            </div>
          )}
          <input
            {...register("email")}
            className={inputStyles}
            placeholder="E-mail"
          />
          <div className="flex flex-col items-start gap-2 mb-3 w-[52%] h-auto">
            {errors.privacy && (
              <div style={{ color: "red", marginBottom: "8px" }}>
                {errors.privacy.message}
              </div>
            )}
            <label className={labelStyles}>
              <input
                {...register("privacy")}
                className={checkboxStyles}
                type="checkbox"
              />
              Соглашаюсь на условия{" "}
              <a
                href="#"
                className="font-qanelas lg:text-[100%] md:text-[75%] sm:text-[30%] text-sm text-white underline underline-offset-4 hover:text-yellows-butter"
              >
                политики конфиденциальности
              </a>
            </label>

            {errors.dataProcessing && (
              <div style={{ color: "red", marginBottom: "8px" }}>
                {errors.dataProcessing.message}
              </div>
            )}
            <label className={labelStyles}>
              <input
                {...register("dataProcessing")}
                className={checkboxStyles}
                type="checkbox"
              />
              Соглашаюсь на обработку персональных данных
            </label>
          </div>
          <button
            type="submit"
            className={`btn-default-yellow ${buttonStyles}`}
            style={{ marginBottom: "96px" }}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Modal>
  );
};
