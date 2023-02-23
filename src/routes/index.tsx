import { Route, Routes } from "react-router-dom";

import { HeaderComponent } from "../components/Header";
import { HomePageComponent } from "../pages/Home";

export const RoutesComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
      </Routes>
    </>
  );
};
