import { createBrowserHistory } from "history";
import {
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Search from "./pages/Search/Search";
import Details from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export const routelink: any = createBrowserHistory();
function App() {
  return (
    <>
      <Provider store={store}>
        <HistoryRouter history={routelink}>
          <Routes>
            <Route path="/" element={<HomeTemplate />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="search" element={<Search />} />
              <Route path="details">
                <Route path=":id" element={<Details />} />
              </Route>
              <Route path="cart" element={<Cart />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </HistoryRouter>
      </Provider>
    </>
  );
}

export default App;
