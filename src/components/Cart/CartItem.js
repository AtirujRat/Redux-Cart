import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartAction } from "../../store/cart-slice";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const addItem = (newItem) => {
    dispatch(cartAction.addItemToCart(newItem));
  };
  const removeItem = (id) => {
    dispatch(cartAction.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {total} ฿ <span className={classes.itemprice}>({price} ฿/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => removeItem(id)}>-</button>
          <button
            onClick={() =>
              addItem({
                id: id,
                title: title,
                price: price,
              })
            }
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
