import { createContext, ReactNode, useState, useEffect } from "react";

import { fakeApi } from "../../services";

interface ProductsProviderData {
  products: Product[];
}

interface ProductsProviderProps {
  children: ReactNode;
}

interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  foto: string;
  categoria_id: string;
}

export const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    fakeApi
      .get("/produtos")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
