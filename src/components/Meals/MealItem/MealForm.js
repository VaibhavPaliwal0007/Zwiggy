import styles from "./MealForm.module.css";
import Input from "../../UI/Input";

export default function MealForm(props) {
    return (
        <form className={styles.form}>
            <Input
                label="Amount"
                input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "6",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Add</button>
        </form>
    );
}
