import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
export const store = configureStore({
  reducer: {
    number: (state = 18) => state,
    productReducer: productReducer,
    //......
  },
});
//store.getState -> hàm của redux sẽ trả về toàn state hiện tại có trên store + typeof -> lấy kiểu trả về của hàm store.getState
// thông qua ReturnType -> lấy được kiểu của toàn bộ state
//khi dùng rootstate thì useSelector sẽ tự động hiểu được kiểu của state
export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
