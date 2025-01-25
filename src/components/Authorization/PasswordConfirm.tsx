import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const passwordSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, "Пароль должен содержать не менее 8 символов."),
    confirmPassword: z
      .string()
      .min(6, "Пароль должен содержать не менее 8 символов."),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Пароли не совпадают.",
    path: ["confirmPassword"],
  });

type PasswordFormData = z.infer<typeof passwordSchema>;

interface ConfirmProps {
  onSubmit: () => void;
  inputStyles: string;
  buttonStyles: string;
  wrapperStyles: string;
}

export const PasswordConfirm: React.FC<ConfirmProps> = ({
  onSubmit,
  inputStyles,
  buttonStyles,
  wrapperStyles,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const handlePasswordSubmit = (data: PasswordFormData) => {
    console.log("Пароль успешно обновлен:", data.newPassword);
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit(handlePasswordSubmit)}
      className={wrapperStyles}
    >
      <input
        {...register("newPassword")}
        className={inputStyles}
        type="password"
        placeholder="Придумайте новый пароль"
      />
      {errors.newPassword && (
        <div style={{ color: "red", marginBottom: "8px" }}>
          {errors.newPassword.message}
        </div>
      )}
      <input
        {...register("confirmPassword")}
        className={inputStyles}
        type="password"
        placeholder="Подтвердите пароль"
      />
      {errors.confirmPassword && (
        <div style={{ color: "red", marginBottom: "8px" }}>
          {errors.confirmPassword.message}
        </div>
      )}
      <button
        type="submit"
        className={`btn-default-yellow ${buttonStyles}`}
        style={{ marginBottom: "59px" }}
      >
        Готово!
      </button>
    </form>
  );
};
