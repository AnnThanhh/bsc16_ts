import { useSelector } from "react-redux";
import type { RootState, DispatchType } from "../../redux/store";
import { useDispatch } from "react-redux";
import type { ProductType } from "../../assets/models/ProductModel";
import { NavLink } from "react-router-dom";
import { getAllProduct } from "../../redux/reducers/productReducer";
import { useEffect } from "react";
import ProductCardComponent from "../../components/ProductCardComponent";
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
        {arrProduct.map((item: ProductType, index: number) => {
          return <ProductCardComponent item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
