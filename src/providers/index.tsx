import { ReactNode } from "react";

import { ProductsProvider } from "./products";
import { CartProvider } from "./cart";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <CartProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </CartProvider>
    </>
  );
};
