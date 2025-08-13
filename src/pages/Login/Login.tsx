import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import type { UserLogin } from "../../assets/models/UserModel";
import type { DispatchType } from "../../redux/store";
import { useDispatch } from "react-redux";
import { userLoginAPI } from "../../redux/reducers/userReducer";
type Props = {};

const Login = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const formLogin = useFormik<UserLogin>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required("Email is required"),
      password: yup.string().min(6).required("Password is required"),
    }),
    onSubmit: (values) => {
      dispatch(userLoginAPI(values));
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formLogin.handleSubmit}
      className="min-h-screen grid place-items-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 px-4"
    >
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-slate-900 dark:bg-white grid place-items-center shadow-md shadow-slate-200/60 dark:shadow-slate-900/40">
            <span className="text-white dark:text-slate-900 font-bold text-lg">
              Λ
            </span>
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Đăng nhập
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Chào mừng quay lại — vui lòng đăng nhập để tiếp tục
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 dark:focus:ring-white/10"
              onChange={formLogin.handleChange}
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Mật khẩu
              </label>
              <a
                href="#"
                className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              >
                Quên mật khẩu?
              </a>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 dark:focus:ring-white/10"
              onChange={formLogin.handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-slate-300 dark:border-slate-700 text-slate-900 focus:ring-slate-900/20 dark:focus:ring-white/20"
              />
              <span className="text-sm text-slate-600 dark:text-slate-300">
                Ghi nhớ tôi
              </span>
            </label>
            <a
              href="#"
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            >
              Tạo tài khoản
            </a>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-slate-900 text-white py-2.5 font-medium hover:bg-slate-800 active:bg-slate-950 disabled:opacity-50 transition dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Đăng nhập
          </button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200 dark:border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white dark:bg-slate-900 px-2 text-slate-400">
                hoặc
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Google
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              SSO
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          Bằng việc tiếp tục, bạn đồng ý với{" "}
          <a
            href="#"
            className="underline hover:text-slate-700 dark:hover:text-slate-200"
          >
            Điều khoản
          </a>{" "}
          &{" "}
          <a
            href="#"
            className="underline hover:text-slate-700 dark:hover:text-slate-200"
          >
            Chính sách bảo mật
          </a>
          .
        </p>
      </div>
    </form>
  );
};

export default Login;
