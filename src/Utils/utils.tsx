import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { routelink } from "../App";

export const ACCESS_TOKEN: string = "accessToken";
export const TOKEN_CYBERSOFT: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJBSSBPZmZpY2UgMDIiLCJIZXRIYW5TdHJpbmciOiIyMy8wMS8yMDI2IiwiSGV0SGFuVGltZSI6IjE3NjkxMjY0MDAwMDAiLCJuYmYiOjE3NTQwNzEyMDAsImV4cCI6MTc2OTI3NzYwMH0.HfOHp0ii4r5Qf3lHL54HpPCSYhv37gJUV0CgPSfGuq0";
  
export const USER_LOGIN: string = "userLogin";

export const DOMAIN: string = "https://apistore.cybersoft.edu.vn";

export const httpClient: AxiosInstance = axios.create({
  baseURL: DOMAIN,
  timeout: 10000,
});

httpClient.interceptors.request.use(
  (req: InternalAxiosRequestConfig<any>) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      // req.headers.Authorization = `Bearer ${accessToken}`;
      req.headers.Authorization = `${accessToken}`;
    }
    req.headers.TokenCybersoft = TOKEN_CYBERSOFT;
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (res: AxiosResponse<any>) => {
    return res.data.content;
  },
  (error: AxiosError) => {
    //xử lý hết các lỗi response
    if (error.response) {
      switch (error.response.status) {
        case 401:
          //xử lý lỗi 401: unthorized, ví dụ chuyển sang trang đăng nhập
          console.error("Unauthorized");
          routelink.push("/login");
          break;
        case 403:
          //xử lý lỗi 403: forbidden, ví dụ thông báo không có quyền truy cập
          console.error("Forbidden - không có quyền truy cập");
          routelink.push("/login");
          break;
        case 404:
          //xử lý lỗi 404: not found, ví dụ thông báo không tìm thấy tài nguyên
          console.error("Not Found - không tìm thấy tài nguyên");
          break;
        case 500:
          //xử lý lỗi 500: internal server error, ví dụ thông báo lỗi server
          console.error("Internal Server Error");
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);
