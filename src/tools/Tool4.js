import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic4 from "../pictures/tools/pic4.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Tool4({ setCartItems }) {

    window.scrollTo(0, 0);
    const [value, setValue] = React.useState(3);

    const costRef = useRef(null);
    const picRef = useRef(null);
    const nameRef = useRef(null);

    const handleBuyNowClick = () => {
        const pic = picRef.current.src;
        const name = nameRef.current.textContent.trim();
        const cost = costRef.current.textContent.trim();
        let amount = 1;

        // Get existing cart items from cookies
        const existingCartItems = Cookies.get('cartItems');

        if (existingCartItems) {
            // Parse existing cart items
            const parsedCartItems = JSON.parse(existingCartItems);
            const findCartItem = parsedCartItems.find(item => item.name === name)
            if (findCartItem)
            {
                findCartItem.amount = findCartItem.amount + 1;
                Cookies.set('cartItems', JSON.stringify(parsedCartItems));
                setCartItems(parsedCartItems);
                return;
            }
            // Add new item to existing items
            const updatedCartItems = [...parsedCartItems, { pic: pic, name: name, price: cost, amount: amount}];

            // Store updated cart items in cookies
            Cookies.set('cartItems', JSON.stringify(updatedCartItems));
            setCartItems(updatedCartItems);
        } else {
            // If cart is empty, set the new item as the only item in the cart
            Cookies.set('cartItems', JSON.stringify([{ pic: pic, name: name, price: cost, amount: amount }]));
            setCartItems([{ pic: pic, name: name, price: cost, amount: amount }]);
        }
    };

    return (
        <div className="product">
            <h1 ref={nameRef}>Folding aluminum luggage trolley 4 wheels up to 150 kg Telescopic 2141</h1>
            <img ref={picRef} src={pic4} alt="tool4" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">A versatile aluminum utility hand truck designed for transporting heavy items. The hand truck is foldable and convenient to carry, suitable for the cargo compartment of any vehicle. It folds easily in length and height with a carrying capacity of up to 150 kg.
                The hand truck comes with 4 strong and high-quality wheels</div>
            <h2>Datasheet</h2>
            <div className="datasheet">
                <ul>
                    <li>Payload capacity: 150 kg</li>
                    <li>Trolley weight: 5.5 kg</li>
                    <li>Platform in closed position: 42x42 cm</li>
                    <li>Maximum platform size when open: 75x42 cm</li>
                    <li>Wheel diameter: 10 cm</li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 329 </div>
                ₪
            </Button>
        </div>
    );
}

export default Tool4;