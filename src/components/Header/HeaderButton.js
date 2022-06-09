import { useContext } from "react";

import styles from "./HeaderButton.module.css";
import Icon from "./Icon";
import CartContext from "../../store/cart-context";

export default function HeaderButton(props) {
    const ctx = useContext(CartContext);

    const numberOfItems = ctx.items.reduce((acc, item) => acc + item.amount, 0);

    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles["icon"]}>
                <Icon />
            </span>
            <span>Your Cart</span>
            <span className={styles["badge"]}>{numberOfItems}</span>
        </button>
    );
};
