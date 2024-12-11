import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
  const productInCart = useSelector((state) => state.cart.items);

  return (
    <>
      {isCartVisible && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>

          <ul>
            {productInCart.map((prod, index) => {
              return (
                <CartItem
                  key={index}
                  item={{
                    id: prod.id,
                    title: prod.name,
                    quantity: prod.quantity,
                    total: prod.totalPrice,
                    price: prod.prices,
                  }}
                />
              );
            })}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
