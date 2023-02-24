import { CartContainer } from "./style";

import { CartCardComponent } from "../../components/CartCard";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

export const CartPageComponent = () => {
  const { cart, cartValue } = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <CartContainer>
        <div>
          {cart.map((value, index) => {
            return (
              <CartCardComponent
                key={value.id}
                image={value.foto}
                name={value.nome}
                description={value.descricao}
                price={value.preco}
                product={value}
              />
            );
          })}
        </div>
        <div>
          {cart.length > 0 ? (
            <>
              {" "}
              <p>Valor total: {cartValue()}</p>
            </>
          ) : (
            <>
              {" "}
              <p>
                Carrinho vazio! acesse a página de{" "}
                <Link to="/products">Produtos</Link> e aproveite!
              </p>
            </>
          )}
        </div>
      </CartContainer>
    </>
  );
};
