import { NavLink } from "react-router-dom";
import type {
  ProductType,
} from "../assets/models/ProductModel";

type Props = {
  item: Partial<ProductType> ;
};

const ProductCardComponent = (props: Props) => {
  const { item } = props;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <NavLink to="#">
        <img className="rounded-t-lg" src={item.image} />
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

        <NavLink to={`/details/${item.id}`}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Detail
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCardComponent;
