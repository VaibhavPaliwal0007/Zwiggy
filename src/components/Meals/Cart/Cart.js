import styles from "./Cart.module.css";
import Modal from "../../UI/Modal";

export default function Cart(props) {
    const cartItems = (
        <ul className={styles["cart-items"]}>
            {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
                (item) => (
                    <li>{item.name}</li>
                )
            )}
        </ul>
    );

    return (
        <Modal onClick={props.onHide}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]} onClick={props.onHide}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
}