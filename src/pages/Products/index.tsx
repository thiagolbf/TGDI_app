import { ProductsContainer } from "./style";

import { ProductCardComponent } from "../../components/ProductCard";

import { useContext } from "react";
import { ProductsContext } from "../../providers/products";

export const ProductsPageComponent = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <ProductsContainer>
        {products.map((value, index) => {
          return (
            <ProductCardComponent
              key={value.id}
              image={value.foto}
              name={value.nome}
              description={value.descricao}
              price={value.preco}
              product={value}
            />
          );
        })}
      </ProductsContainer>
    </>
  );
};
