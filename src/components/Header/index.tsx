import { useState } from "react";

import { Header } from "./style";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const HeaderComponent = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <Header responsive={responsive}>
        <p>TGID</p>

        <Link to="/cart">
          Carrinho <AiOutlineShoppingCart />
        </Link>
        <Link to="/products">Produtos</Link>

        <GiHamburgerMenu
          className="icon"
          onClick={() => setResponsive(!responsive)}
        />
      </Header>
    </>
  );
};
