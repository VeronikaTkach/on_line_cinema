import React, { useState } from "react";

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
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    if (!newPassword.trim() || newPassword.length < 5) {
      newErrors.push("Пароль должен содержать не менее 8 символов.");
    }
    if (newPassword !== confirmPassword) {
      newErrors.push("Пароли не совпадают.");
    }

    if (newErrors.length === 0) {
      setErrors([]);
      onSubmit();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handlePasswordSubmit} className={wrapperStyles}>
      <input
        className={inputStyles}
        type="password"
        placeholder="Придумайте новый пароль"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <input
        className={inputStyles}
        type="password"
        placeholder="Подтвердите пароль"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
      <button type="submit" className={`${buttonStyles} mb-14`}>
        Готово!
      </button>
    </form>
  );
};
