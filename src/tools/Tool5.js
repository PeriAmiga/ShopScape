import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic5 from "../pictures/tools/pic5.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Tool5({ setCartItems }) {

    window.scrollTo(0, 0);
    const [value, setValue] = React.useState(4);

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
            <h1 ref={nameRef}>GO 2 Professional cordless screwdriver by Bosch</h1>
            <img ref={picRef} src={pic5} alt="tool5" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description"> A professional cordless screwdriver from Bosch with an internal 3.6V battery with a capacity of 1.5Ah. Comes in a hard plastic case with a USB charging cable and 2 bits (PH1, PH2). Allows for the screwing of a large quantity of screws per charge - up to 200 screws of 3.5x35 mm in softwood / 200 screws of 3x60 mm in plastic.

                It has 2 options for operating the device:
                First, a normal press on the power switch.
                Second, activating pressure with the screwdriver on the screw you want to operate, and the screwdriver will turn on by itself (and turn off when pressure is released)</div>
            <h2>Datasheet</h2>
            <div className="datasheet">
                <ul>
                    <li>Unique dual-mode operation - activate pressure on the screw you want to tighten or simply press a switch</li>
                    <li>Electronic brake</li>
                    <li>5 mechanical torque settings</li>
                    <li>Charge status indicator</li>
                    <li>Torque: 2.5NM, 5NM</li>
                    <li>Non-resistant rotation speed: 360 RPM</li>
                    <li>5 mechanical torque settings</li>
                    <li>Charging: USB charging socket</li>
                    <li>Battery: 3.6V 1.5Ah internal</li>
                    <li>Weight: 310 grams</li>
                    <li>Bit holder: 1/4" internal hex</li>
                    <li>Length: 190 mm</li>
                    <li>Diameter: 40 mm</li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 219 </div>
                ₪
            </Button>
        </div>
    );
}

export default Tool5;