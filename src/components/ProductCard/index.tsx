import { Card } from "./style";

interface ProductCardComponentProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

export const ProductCardComponent = ({
  image,
  name,
  description,
  price,
}: ProductCardComponentProps) => {
  return (
    <Card>
      <img src={image} alt="" />
      <p>nome: {name}</p>
      <p>descrição: {description}</p>
      <p>preço: {price}</p>
      <button>Adicionar ao Carrinho</button>
    </Card>
  );
};
