import { Card } from "./style";

import { useContext } from "react";
import { CartContext } from "../../providers/cart";

interface ProductCardComponentProps {
  image: string;
  name: string;
  description: string;
  price: number;
  product: Product;
}

interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
  categoria_id: number;
}

export const ProductCardComponent = ({
  image,
  name,
  description,
  price,
  product,
}: ProductCardComponentProps) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card>
      <img src={image} alt="" />
      <p>nome: {name}</p>
      <p>descrição: {description}</p>
      <p>preço: {price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </Card>
  );
};
