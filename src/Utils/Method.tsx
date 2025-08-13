import type { UserLogged } from "../redux/reducers/userReducer";
import { ACCESS_TOKEN } from "./utils";
// cookies.ts
export const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )};expires=${expires.toUTCString()};path=/`;
};

export const getCookie = (name: string): string | null => {
  const nameEQ = encodeURIComponent(name) + "=";
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(nameEQ)) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
  return null;
};

export const removeCookie = (name: string) => {
  // Đặt ngày hết hạn ở quá khứ để xóa cookie
  document.cookie = `${encodeURIComponent(
    name
  )}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

export const setDataJSON = (name: string, value: UserLogged) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getDataJSON = (name: string) => {
  const data = localStorage.getItem(name);
  return data ? JSON.parse(data) : null;
};

export const removeData = (name: string) => {
  localStorage.removeItem(name);
};

export const setAccessToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};
