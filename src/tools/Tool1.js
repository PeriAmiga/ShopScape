import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic1 from "../pictures/tools/pic1.png";
import '../Product.css';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

function Tool1({ setCartItems }) {

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
            <h1 ref={nameRef}>18V Black Cordless Tool Set - Hammer Drill + Impact Driver + Dust Extractor for Hammer Drill + Detachable Handle + Carrying Case + 2x 5.0Ah Batteries and Charger by Makita</h1>
            <img ref={picRef} src={pic1} alt="tool1" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">A special black set for professionals who want to prevent dust dispersion during drilling with a hammer drill or work in clean areas and rooms. The hammer drill with a durable BL motor is resistant to extreme dust and moisture conditions for drilling in concrete, metal, and wood. It includes an automatic and interchangeable chuck. Tools designed for efficient dust collection. Includes a HEPA filter suitable for work in clean rooms.</div>
            <h2>Datasheet</h2>
            <div className="datasheet">
                <ul>
                    <li>Impact Driver DTD153 18V</li>
                    <ul type="circle">
                        <li>Working Voltage: 18V</li>
                        <li>Speed: 0-3400 RPM</li>
                        <li>Impacts per Minute: 0-3600</li>
                        <li>Torque: 170 N/m</li>
                        <li>Weight: 1.3 kg</li>
                    </ul>
                    <br />
                    <li>Rotary Hammer DHR243 18V</li>
                    <ul type="circle">
                        <li>Working Voltage: 18V</li>
                        <li>Operating Modes: Drilling in concrete, chiseling, rotation stop</li>
                        <li>Drilling Capacity: Concrete - 24 mm, Metal - 13 mm, Wood - 27 mm</li>
                        <li>Speed: 0-950 RPM</li>
                        <li>Impacts per Minute: 0-4700</li>
                        <li>Impact Energy: 2 Joules</li>
                        <li>Weight: 3.2 kg</li>
                    </ul>
                    <br />
                    <li>Dust Extractor for Rotary Hammer DHR243</li>
                    <ul type="circle">
                        <li>Suction Power: 350 liters per minute</li>
                        <li>Weight: 1.5 kg</li>
                    </ul>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 2,579 </div>
                ₪
            </Button>
        </div>
    );
}

export default Tool1;