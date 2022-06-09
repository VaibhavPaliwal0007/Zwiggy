import { useState } from "react";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Meals/Cart/Cart";

function App() {
    const [isCart, setIsCart] = useState(false);

    const showCartHandler = () => {
        setIsCart(true);
    };

    const hideCartHandler = () => {
        setIsCart(false);
    };

    return (
        <>
            {isCart && <Cart onHide={hideCartHandler} />}
            <Header onShow={showCartHandler} />
            <main>
                <Meals />
            </main>
        </>
    );
}

export default App;
