import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic1 from "../pictures/televisions/pic1.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Television1({ setCartItems }) {

    window.scrollTo(0, 0);
    const [value, setValue] = React.useState(5);

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
            <h1 ref={nameRef}>Samsung QN800C Neo QLED 8K UHD HDR Smart TV 85 inches (QE85QN800C)</h1>
            <img ref={picRef} src={pic1} alt="television1" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>Cinematic 8K Experience</h3>
                <p>
                    Elevate your viewing experience with the Samsung QN800C Neo QLED 8K HDR Smart TV. Featuring Quantum Matrix Technology Pro and super-focused Mini LED lights, this TV delivers the most detailed picture yet. With our highest density of Quantum Mini LEDs, precisely controlled to create deep blacks, the highest brightness levels, outstanding contrast, and the most detailed image yet.
                </p>

                <h3>Neural Quantum Processor 8K</h3>
                <p>
                    Our smartest processor yet, the Neural Quantum Processor 8K, acts as the brain of the TV. With AI and 64 neural networks, it learns scene by scene to enhance brightness, boost contrast, improve objects, and overcome background noise. It also upscales resolution to stunning 8K quality, making the best way to watch 4K content is through an 8K TV.
                </p>

                <h3>Dolby Atmos Sound</h3>
                <p>
                    Experience cinema-quality sound with Dolby Atmos. Dolby Atmos technology works with the TV's built-in 12 speakers to create an incredibly immersive and realistic sound impression. When a plane flies overhead in your favorite action movie, it feels like it's actually above you.
                </p>

                <h3>Infinity One Design</h3>
                <p>
                    The stunning Infinity One design takes your viewing experience to the next level with an exceptionally slim profile.
                </p>
            </div>
            <div className="datasheet">
                <h2>Technical Specifications</h2>
                <ul>
                    <li>Impact Driver DTD153 18V</li>
                    <ul type="circle">
                        <li>Working Voltage: 18V</li>
                        <li>Speed: 0-3400 RPM</li>
                        <li>Impacts per Minute: 0-3600</li>
                        <li>Torque: 170 N/m</li>
                        <li>Weight: 1.3 kg</li>
                    </ul>
                    <br/>
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
                    <br/>
                    <li>Dust Extractor for Rotary Hammer DHR243</li>
                    <ul type="circle">
                        <li>Suction Power: 350 liters per minute</li>
                        <li>Weight: 1.5 kg</li>
                    </ul>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 29,945 </div>
                ₪
            </Button>
        </div>
    );
}

export default Television1;