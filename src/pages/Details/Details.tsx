import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, DispatchType } from "../../redux/store";
import { getProductDetail } from "../../redux/reducers/productReducer";
import type { Category } from "../../assets/models/ProductModel";
type Props = {};

const Details = (props: Props) => {
  const params = useParams();
  const { id } = params;
  const { prodDetail } = useSelector(
    (state: RootState) => state.productReducer
  );
  const dispatch: DispatchType = useDispatch();

  const getProductDetailAPI = () => {
    dispatch(getProductDetail(id as string));
  };

  useEffect(() => {
    getProductDetailAPI();
  }, [id]);
  return (
    <div>
      <h3>Details</h3>
      <div className="w-full max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50">
            <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-medium shadow">
              Featured
            </span>
            <img
              src={prodDetail?.image}
              alt="vans black"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {prodDetail?.name}
                </h1>
                <p className="text-sm text-gray-500">{prodDetail?.alias}</p>
              </div>
              <div className="text-lg md:text-xl font-bold">{prodDetail?.price}</div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs">
                {prodDetail?.categories.map((item: Category) => {
                  return (
                    <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs">
                      {item.category}
                    </span>
                  );
                })}
              </span>
            </div>

            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                {prodDetail?.shortDescription}
            </p>

            <div className="mt-5">
              <span className="text-sm font-medium">Size</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {prodDetail?.size.map((item: string) => {
                  return (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full border text-sm bg-white text-gray-700 border-gray-300"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="mt-5">
              <span className="block text-sm font-medium mb-2">Quantity</span>
              <div className="inline-flex items-center rounded-full border border-gray-300 overflow-hidden">
                <span className="px-3 py-1.5 text-lg">−</span>
                <span className="w-14 text-center py-1.5">1</span>
                <span className="px-3 py-1.5 text-lg">+</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 bg-black text-white font-medium shadow-sm"
              >
                Add to cart
              </button>
              <div className="text-xs text-gray-500">
                In stock • Ships in 1–2 days
              </div>
            </div>

            <details className="mt-6 group">
              <summary className="cursor-pointer list-none select-none text-sm font-medium flex items-center gap-2">
                Full description
              </summary>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                {prodDetail?.description}
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
