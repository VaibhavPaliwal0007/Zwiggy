import { useContext } from "react";

import CartContext from "../../store/cart-context";

import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

export default function Cart(props) {
    const ctx = useContext(CartContext);

    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const hasItems = ctx.items.length > 0;

    const cartItemAddHandler = (item) => {
        ctx.addItem(item);
    };

    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id);
    };

    const cartItems = (
        <ul className={styles["cart-items"]}>
            {ctx.items.map((item) => (
                 <CartItem
                 key={item.id}
                 name={item.name}
                 amount={item.amount}
                 price={item.price}
                 onRemove={cartItemRemoveHandler.bind(null, item.id)}
                 onAdd={cartItemAddHandler.bind(null, item)}
             />
            ))}
        </ul>
    );

    return (
        <Modal onClick={props.onHide}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button
                    className={styles["button--alt"]}
                    onClick={props.onHide}
                >
                    Close
                </button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
}
