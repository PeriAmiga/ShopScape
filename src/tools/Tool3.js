import * as React from 'react';
import pic3 from "../pictures/tools/pic3.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import {useRef} from "react";
import Cookies from "js-cookie";


function Tool3({ setCartItems }) {

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
            <h1 ref={nameRef}>Electric paint sprayer with a 500W compressor, model 100900-003 Hunter</h1>
            <img ref={picRef} src={pic3} alt="tool3" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">An ideal tool for handymen, painters, or anyone looking to save a lot of time on various tasks such as painting walls/entire apartments, furniture, fences, etc. The tool contains a powerful air compressor that allows for an airflow of 850 ml/minute, providing significant pushing force for paint spraying.
                The paint sprayer comes with a 700 ml paint container that holds paint with a maximum viscosity of up to 60DIN. The tool also includes a cup for mixing paint.</div>
            <h2>Datasheet</h2>
            <div className="datasheet">
                <ul>
                    <li>High-pressure spraying nozzle for precise control and better performance.</li>
                    <li>Ergonomic design - The sprayer weighs only 1.6 kg and includes an additional upper grip handle separated from the engine, reducing hand fatigue and increasing freedom of movement.</li>
                    <li>Comes with a hanging strap that can be attached to the tool for more mobile and convenient work.</li>
                    <li>Easy to use</li>
                    <li>Uniform and clean color distribution</li>
                    <li>Recommended for use with water-based materials</li>
                    <li>Power: 500W</li>
                    <li>Voltage: 230V-50Hz</li>
                    <li>Maximum viscosity: 60DIN</li>
                    <li>Tank capacity: 700ml</li>
                    <li>Dimensions: 90x187 mm</li>
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

export default Tool3;