export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validatePassword = (password: string): string[] => {
  const errors: string[] = [];
  if (password.length < 8)
    errors.push("Password must be at least 8 characters");
  if (!/[A-Z]/.test(password))
    errors.push("Include at least one uppercase letter");
  if (!/[a-z]/.test(password))
    errors.push("Include at least one lowercase letter");
  if (!/\d/.test(password)) errors.push("Include at least one number");
  if (!/[@$!%*?&]/.test(password))
    errors.push("Include at least one special character");
  return errors;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
