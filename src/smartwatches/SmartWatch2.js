import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic2a from "../pictures/smartwatches/pic2a.png";
import pic2b from "../pictures/smartwatches/pic2b.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function SmartWatch2({ setCartItems }) {

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
            <h1 ref={nameRef}>Samsung Galaxy Watch 6 Classic 43mm SM-R955F - Black color - with LTE connectivity</h1>
            <img ref={picRef} src={pic2a} alt="smartwatch2" />
            <img src={pic2b} alt="smartwatch2" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>Samsung Galaxy Watch6 Classic 43mm SM-R955F - Black - LTE Connectivity</h3>
                <p>
                    The Samsung Galaxy Watch6 Classic redefines smartwatch functionality and style. With LTE connectivity, a sleek black design, and a host of advanced features, it's the ultimate companion for your active lifestyle.
                </p>

                <h3>Advanced Health Monitoring</h3>
                <p>
                    Keep track of your health with advanced features like ECG monitoring, blood pressure monitoring, and blood oxygen level measurement. The Galaxy Watch6 Classic provides real-time insights into your health, helping you stay on top of your wellness goals.
                </p>

                <h3>Stylish Design</h3>
                <p>
                    With its classic 43mm black design, the Galaxy Watch6 Classic exudes timeless elegance. The rotating bezel allows for easy navigation through menus and apps, while the vibrant AMOLED display ensures crystal-clear visibility in any lighting conditions.
                </p>

                <h3>LTE Connectivity</h3>
                <p>
                    Stay connected wherever you go with LTE connectivity. Make calls, send texts, and stream music directly from your watch, even when your phone isn't nearby. With LTE support, you can enjoy the freedom of leaving your phone behind without sacrificing connectivity.
                </p>

                <h3>Long Battery Life</h3>
                <p>
                    The Galaxy Watch6 Classic boasts a long-lasting battery that can keep up with your busy schedule. With up to two days of battery life on a single charge, you can go longer between charges and spend more time enjoying your favorite activities.
                </p>

                <h3>Smart Fitness Tracking</h3>
                <p>
                    Track your workouts and stay motivated with smart fitness tracking features. The Galaxy Watch6 Classic automatically detects and tracks your activities, including walking, running, cycling, and swimming. With built-in GPS and heart rate monitoring, you can monitor your progress and reach your fitness goals with ease.
                </p>

                <h3>Water Resistance</h3>
                <p>
                    Take your Galaxy Watch6 Classic wherever your adventures lead, thanks to its water resistance rating of 5 ATM. Whether you're swimming laps in the pool or sweating it out at the gym, you can trust your watch to keep up with you.
                </p>
            </div>
            <div className="datasheet">
                <h2>Technical Specifications</h2>
                <h3>Model</h3>
                <p>SM-R955F</p>
                <h3>Diameter</h3>
                <p>43 mm</p>
                <h3>Materials</h3>
                <p>Stainless Steel</p>
                <h3>Processor</h3>
                <p>Exynos W930 (Dual-core, 5nm) 1.4GHz</p>
                <h3>Memory and Storage</h3>
                <p>2.0GB RAM + 16GB</p>
                <h3>Display</h3>
                <p>Sapphire crystal</p>
                <h3>Health</h3>
                <p>Heart Rate Monitor, ECG, Blood Pressure, BIA, Continuous SpO2, Skin Temperature</p>
                <h3>Sensors</h3>
                <p>Accelerometer, Gyroscope, Barometer, Ambient Light, Compass</p>
                <h3>Charging</h3>
                <p>WPC Wireless Charging</p>
                <h3>Fast Charging</h3>
                <p>Yes</p>
                <h3>Connectivity</h3>
                <p>Bluetooth 5.3, Wi-Fi 2.4GHz & 5GHz, GPS, NFC, LTE</p>
                <h3>Water Resistance</h3>
                <p>5ATM+IP68/MIL-STD-810H</p>
                <h3>Feedback</h3>
                <p>Microphone, Speaker, Vibration, Rotating Bezel</p>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 1,510 </div>
                ₪
            </Button>
        </div>
    );
}

export default SmartWatch2;