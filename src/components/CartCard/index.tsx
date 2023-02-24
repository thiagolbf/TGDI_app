import { Card } from "./style";

import { useContext } from "react";
import { CartContext } from "../../providers/cart";

interface CartCardComponentProps {
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
  categoria_id: string;
}

export const CartCardComponent = ({
  image,
  name,
  description,
  price,
  product,
}: CartCardComponentProps) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <Card>
      <img src={image} alt="" />
      <p>nome: {name}</p>
      <p>descrição: {description}</p>
      <p>preço: {price}</p>
      <button onClick={() => removeFromCart(product)}>
        Remover do Carrinho
      </button>
    </Card>
  );
};
