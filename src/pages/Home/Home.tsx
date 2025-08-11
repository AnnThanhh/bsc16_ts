import { useSelector } from "react-redux";
import type { RootState, DispatchType } from "../../redux/store";
import { useDispatch } from "react-redux";
import type { ProductType } from "../../assets/models/ProductModel";
import { NavLink } from "react-router-dom";
import { getAllProduct } from "../../redux/reducers/productReducer";
import { useEffect } from "react";
type Props = {};

const Home = (props: Props) => {
  const { arrProduct } = useSelector(
    (state: RootState) => state.productReducer
  );
  const dispatch: DispatchType = useDispatch();

  const getAllProductAPI = () => {
    dispatch(getAllProduct());
  };

  useEffect(() => {
    getAllProductAPI();
  }, []);
  return (
    <div>
      <h3>Product list</h3>
      <div className="grid grid-cols-4 gap-4">
        {arrProduct.map((item: ProductType) => {
          return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <NavLink to="#">
                <img className="rounded-t-lg" src={item.imgLink} />
              </NavLink>
              <div className="p-5">
                <NavLink to="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </NavLink>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.alias}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
