import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal/Modal";
import { CloseButton } from "./CloseButton";
import { RegisterModalProps } from "../../types/types";
import { createUseStyles } from "react-jss";
import { registrationSchema, RegistrationFormData } from "./schema";
import axios from "axios";

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
    reset,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const classes = useStyles();

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

  const SubmitToServer = async (data: RegistrationFormData) => {
    try {
      const response = await axios.post("API_URL", data);
      console.log("resp:", response.data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (data: RegistrationFormData) => {
    SubmitToServer(data);
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} noColor>
      <div className={contentStyles} onClick={(e) => e.stopPropagation()}>
        <div className={classes.bckBtnContainer}>
          <button onClick={onBack} className={classes.bckBtn}>
            Назад
          </button>
          <CloseButton onClick={onClose} />
        </div>
        <div className={classes.titleContainer}>
          <h1 className={titleStyles}>Зарегистрироваться</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={wrapperStyles}>
          {errors.login && (
            <div className={classes.inputError}>{errors.login.message}</div>
          )}
          <input
            {...register("login")}
            className={inputStyles}
            type="text"
            placeholder="Придумайте логин"
          />
          {errors.password && (
            <div className={classes.inputError}>{errors.password.message}</div>
          )}
          <input
            {...register("password")}
            className={inputStyles}
            type="password"
            placeholder="Придумайте пароль"
          />
          {errors.confirmPassword && (
            <div className={classes.inputError}>
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
            <div className={classes.inputError}>{errors.phone.message}</div>
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
            <div className={classes.inputError}>{errors.email.message}</div>
          )}
          <input
            {...register("email")}
            className={inputStyles}
            placeholder="E-mail"
          />
          <div className={classes.checkboxContainer}>
            {errors.privacy && (
              <div className={classes.inputError}>{errors.privacy.message}</div>
            )}
            <label className={classes.label}>
              <input
                {...register("privacy")}
                className={classes.checkbox}
                type="checkbox"
              />
              Соглашаюсь на условия{" "}
              <a href="#" className={classes.privacyLink}>
                политики конфиденциальности
              </a>
            </label>

            {errors.dataProcessing && (
              <div className={classes.inputError}>
                {errors.dataProcessing.message}
              </div>
            )}
            <label className={classes.label}>
              <input
                {...register("dataProcessing")}
                className={classes.checkbox}
                type="checkbox"
              />
              Соглашаюсь на обработку персональных данных
            </label>
          </div>
          <button
            type="submit"
            className={`btn-default-yellow ${buttonStyles} ${classes.button}`}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Modal>
  );
};

const useStyles = createUseStyles({
  label: {
    marginTop: "8px",
    fontFamily: "'Qanelas', sans-serif",
    fontSize: "1rem",
    color: "#fff",
    whiteSpace: "nowrap",
    "@media (max-width: 1024px)": {
      fontSize: "0.75rem",
    },
    "@media (max-width: 768px)": {
      fontSize: "0.3rem",
    },
  },
  bckBtnContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1.25rem",
  },
  bckBtn: {
    Family: "'Qanelas', sans-serif",
    fontWeight: "bold",
    fontSize: "16px",
    "&:hover": {
      color: "#FFF065",
    },
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    marginBottom: "12px",
    height: "auto",
  },
  checkbox: {
    marginRight: "8px",
    width: "20px",
    height: "20px",
    borderRadius: "5px",
    accentColor: "#A5D35F",
  },
  privacyLink: {
    fontFamily: "'Qanelas', sans-serif",
    fontSize: "14px",
    color: "white",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    transition: "color 0.3s ease",

    "&:hover": {
      color: "#FFF065",
    },

    "@media (max-width: 640px)": {
      fontSize: "30%",
    },
    "@media (max-width: 768px)": {
      fontSize: "75%",
    },
    "@media (max-width: 1024px)": {
      fontSize: "100%",
    },
  },
  inputError: {
    color: "red",
    marginBottom: "8px",
  },
  button: {
    marginBottom: "96px",
  },
});
