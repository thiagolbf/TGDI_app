import { ProductsContainer, FilterProducts } from "./style";

import { ProductCardComponent } from "../../components/ProductCard";

import { useContext } from "react";
import { ProductsContext } from "../../providers/products";

export const ProductsPageComponent = () => {
  const { products, filteredProducts } = useContext(ProductsContext);

  return (
    <>
      <FilterProducts>
        <label>Filtrar produtos</label>
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            filteredProducts(e.target.value)
          }
        >
          <option value="">Selecione uma opção</option>
          <option value="">Todos</option>
          <option value="1">Video Games</option>
          <option value="2">Smartphones</option>
          <option value="3">Outros</option>
        </select>
      </FilterProducts>
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
