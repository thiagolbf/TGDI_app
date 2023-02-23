import { useState } from "react";

import { Header } from "./style";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

export const HeaderComponent = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <Header responsive={responsive}>
        <p>TGDI</p>
        <Link to="/registercostumer">Produtos</Link>
        <Link to="/registerproduct">Carrinho</Link>

        <GiHamburgerMenu
          className="icon"
          onClick={() => setResponsive(!responsive)}
        />
      </Header>
    </>
  );
};
