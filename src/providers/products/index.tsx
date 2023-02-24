import { createContext, ReactNode, useState, useEffect } from "react";

import { fakeApi } from "../../services";

interface ProductsProviderData {
  products: Product[];
  filteredProducts: (value: string) => void;
}

interface ProductsProviderProps {
  children: ReactNode;
}

interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
  categoria_id: number;
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

  const filteredProducts = (value: string) => {
    switch (value) {
      case "":
        fakeApi
          .get("/produtos")
          .then((res) => {
            setProducts(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        break;

      case "1":
        fakeApi
          .get("/produtos")
          .then((res) => {
            const filtered = res.data.filter(
              (value: Product) => value.categoria_id === 1
            );
            setProducts(filtered);
          })
          .catch((err) => {
            console.log(err);
          });

        break;

      case "2":
        fakeApi
          .get("/produtos")
          .then((res) => {
            const filtered = res.data.filter(
              (value: Product) => value.categoria_id === 2
            );
            setProducts(filtered);
          })
          .catch((err) => {
            console.log(err);
          });
        break;

      case "3":
        fakeApi
          .get("/produtos")
          .then((res) => {
            const filtered = res.data.filter(
              (value: Product) => value.categoria_id === 3
            );
            setProducts(filtered);
          })
          .catch((err) => {
            console.log(err);
          });
        break;
    }
  };

  return (
    <ProductsContext.Provider value={{ products, filteredProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
