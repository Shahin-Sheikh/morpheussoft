// src/components/login-form.component.tsx
import React from "react";
import { FormikProps } from "formik";
import Link from "next/link";
import { LoginFormValues } from "./form.config";
import FormInput from "@/components/ui/formik-input-field.component";
import FormButton from "@/components/ui/primary-button.component";

interface LoginFormProps {
  formik: FormikProps<LoginFormValues>;
  isLoading?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ formik, isLoading = false }) => {
  const { values, handleChange, handleBlur, errors, touched } = formik;

  return (
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email address"
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          autoComplete="email"
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              checked={values.rememberMe}
              onChange={handleChange}
              onBlur={handleBlur}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link
              href="/forgot-password"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        <div>
          <FormButton
            type="submit"
            isLoading={isLoading || formik.isSubmitting}
            disabled={!formik.isValid || !formik.dirty}
          >
            Sign in
          </FormButton>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Google</span>
              {/* Google icon */}
            </button>
          </div>

          <div>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with GitHub</span>
              {/* GitHub icon */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
