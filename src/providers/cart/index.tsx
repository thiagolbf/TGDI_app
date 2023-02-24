import { createContext, ReactNode, useState } from "react";

import { toast } from "react-toastify";

interface CartProviderData {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  cartValue: () => number;
  cart: Product[];
}

interface CartProviderProps {
  children: ReactNode;
}

interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
  categoria_id: string;
}

export const CartContext = createContext<CartProviderData>(
  {} as CartProviderData
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>(
    JSON.parse(localStorage.getItem("carts") ?? "[]")
  );

  const addToCart = (product: Product) => {
    const check = cart.some((value) => value.id === product.id);

    console.log(check);
    if (!check) {
      localStorage.setItem("carts", JSON.stringify([...cart, product]));
      setCart([...cart, product]);
      cartValue();
      toast.success("Produto adicionado ao carrinho");
    } else {
      toast.error("Produto já adicionado");
    }
  };

  const removeFromCart = (product: Product) => {
    const currentCart = JSON.parse(localStorage.getItem("carts") ?? "[]");

    const newCart = currentCart.filter((value: Product) => {
      return value.nome !== product.nome;
    });

    localStorage.setItem("carts", JSON.stringify(newCart));
    setCart(newCart);
    cartValue();
    toast.warning("Produto removido do carrinho");
  };

  const cartValue = () => {
    const total = cart.reduce(
      (acc, currentValue) => acc + currentValue.preco,
      0
    );
    return total;
  };

  return (
    <CartContext.Provider
      value={{ addToCart, removeFromCart, cartValue, cart }}
    >
      {children}
    </CartContext.Provider>
  );
};
