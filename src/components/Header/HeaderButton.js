import styles from './HeaderButton.module.css';
import Icon from './Icon'

export default function HeaderButton(props) {
    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles['icon']}>
                <Icon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles['badge']}>
                3
            </span>
        </button>
    );
};
