// src/config/form.config.ts
import * as Yup from "yup";

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export const initialLoginValues: LoginFormValues = {
  email: "",
  password: "",
  rememberMe: false,
};

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean(),
});
