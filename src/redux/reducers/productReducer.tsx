import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DispatchType } from "../store";
import axios from "axios";
import type { ProductDetailType, ProductType } from "../../assets/models/ProductModel";

export interface ProductStateType {
  arrProduct: ProductType[];
  prodDetail: ProductDetailType | null;
  //...
}

const initialState: ProductStateType = {
  arrProduct: [],
  prodDetail: null,
  //....
};

const productReducer = createSlice({
  name: "producerReducer",
  initialState,
  reducers: {
    setArrProductAction: (
      state: ProductStateType,
      action: PayloadAction<ProductType[]>
    ) => {
      state.arrProduct = action.payload;
    },
    setProdDetailAction: (
      state: ProductStateType,
      action: PayloadAction<ProductDetailType>
    ) => {
      state.prodDetail = action.payload;
    },
  },
});

export const { setArrProductAction, setProdDetailAction } = productReducer.actions;

export default productReducer.reducer;

export const getAllProduct = () => {
  return async (dispatch: DispatchType) => {
    const res = await axios.get(
      "https://apistore.cybersoft.edu.vn/api/Product"
    );

    const action: PayloadAction<ProductType[]> = setArrProductAction(
      res.data.content
    );
    dispatch(action);
  };
};

export const getProductDetail = (id: string) => {
  return async (dispatch: DispatchType) => {    
    const res = await axios.get(
      `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`
    );
    const action: PayloadAction<ProductDetailType> = setProdDetailAction(
      res.data.content
    );
    dispatch(action);
  };
};
