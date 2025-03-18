import { z } from "zod";

export const registrationSchema = z
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
      .refine((val) => val === true, "Необходимо согласиться с политикой конфиденциальности."),
    dataProcessing: z
      .boolean()
      .refine((val) => val === true, "Необходимо согласиться на обработку персональных данных."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type RegistrationFormData = z.infer<typeof registrationSchema>;
