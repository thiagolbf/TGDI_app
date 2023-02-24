import { Route, Routes } from "react-router-dom";

import { HeaderComponent } from "../components/Header";
import { HomePageComponent } from "../pages/Home";
import { ProductsPageComponent } from "../pages/Products";
import { CartPageComponent } from "../pages/Cart";

export const RoutesComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/products" element={<ProductsPageComponent />} />
        <Route path="/cart" element={<CartPageComponent />} />
      </Routes>
    </>
  );
};
