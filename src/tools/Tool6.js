import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic6 from "../pictures/tools/pic6.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Tool6({ setCartItems }) {

    window.scrollTo(0, 0);
    const [value, setValue] = React.useState(2);

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
            <h1 ref={nameRef}>Professional jigsaw '8 Hunter</h1>
            <img ref={picRef} src={pic6} alt="tool6" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description"> A circular saw designed for a wide range of cutting tasks with the option to adjust the cutting angles. It provides a rotation speed of 5000 RPM, with a blade diameter of 210 mm (8 inches)</div>
            <h2>Datasheet</h2>
            <div className="datasheet">
                <ul>
                    <li>Rotation speed: 5000 RPM</li>
                    <li>Blade diameter: 8" / 210 mm</li>
                    <li>Table tilt angle: 45° to 45°</li>
                    <li>Cutting capacity:
                        <ul>
                            <li>60x120 mm: 0°x90°</li>
                            <li>60x80 mm: 0°x45°</li>
                            <li>35x120 mm: 45°x90°</li>
                            <li>35x80 mm: 45°x45°</li>
                        </ul>
                    </li>
                    <li>Power: 1400W</li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 393 </div>
                ₪
            </Button>
        </div>
    );
}

export default Tool6;