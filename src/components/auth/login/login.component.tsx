"use client";
import React from "react";
import { Formik } from "formik";
import {
  initialLoginValues,
  LoginFormValues,
  loginValidationSchema,
} from "./form.config";
import LoginForm from "./login-form.component";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Updated import

const LoginComponent: React.FC = () => {
  const router = useRouter(); // No changes here

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting, setErrors }: any
  ) => {
    try {
      // Replace with actual authentication logic
      console.log("Login values:", values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/dashboard"); // No changes here
    } catch (error) {
      setErrors({
        email: "Invalid credentials",
        password: "Invalid credentials",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Formik<LoginFormValues>
          initialValues={initialLoginValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => <LoginForm formik={formikProps} />}
        </Formik>
      </div>
    </div>
  );
};

export default LoginComponent;
