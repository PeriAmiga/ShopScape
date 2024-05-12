import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic4 from "../pictures/televisions/pic4.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Television4({ setCartItems }) {

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
            <h1 ref={nameRef}>Samsung 65'' Crystal UHD 4K HDR Smart TV - UE65CU7000</h1>
            <img ref={picRef} src={pic4} alt="television4" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>Samsung CU7000 Crystal UHD 4K HDR Smart TV</h3>
                <p>Experience all the entertainment you must see in stunning 4K picture quality.</p>
                <h3>PurColour</h3>
                <p>Display the true colors of your content with PurColour, enhancing the quality of every image, revealing hidden details, and showing you the true colors of your content.</p>
                <h3>Crystal Processor 4K</h3>
                <p>Upgrade picture and sound quality with the Crystal Processor 4K, which operates in the background to enhance the quality to 4K details and adjust the sound according to what's playing.</p>
                <h3>Tizen-Powered Smart TV</h3>
                <p>Powered by Tizen, a plethora of apps and services for your enjoyment. Dive into a vast collection of 4K movies, TV shows, and all your favorite advanced TV apps - including Netflix, Disney+, Apple TV, and more - all in one place.</p>
                <h3>SmartThings</h3>
                <p>Control your smart home devices from your TV. From gaming consoles to Bluetooth speakers and up to 1000 smart devices, this TV gives you simple control over your connected home.</p>
            </div>
            <h2>Technical Specifications</h2>
            <div className="datasheet">
                <h3>Display</h3>
                <ul>
                    <li>Screen Size: 65"</li>
                    <li>Screen Resolution: 4K 3840x2160</li>
                </ul>
                <h3>Picture</h3>
                <ul>
                    <li>Picture Processor: Crystal processor 4K</li>
                    <li>Display Technology: Pure Color</li>
                    <li>Mega Contrast: Direct LED</li>
                    <li>Backlight Dimming Technology: UHD dimming</li>
                    <li>Motion Enhancement: Motion Xcelerator</li>
                    <li>4K Upscaling: Yes</li>
                    <li>HDR: HDR10+/HLG</li>
                    <li>Perfect Black: Yes</li>
                </ul>
                <h3>Sound</h3>
                <ul>
                    <li>Bluetooth Audio: Yes</li>
                    <li>RMS Speaker Output: 20W</li>
                    <li>Number of Audio Channels: 2Ch</li>
                    <li>Q-Symphony Compatibility: Yes</li>
                    <li>Adaptive Sound: Yes</li>
                </ul>
                <h3>Media</h3>
                <ul>
                    <li>Smart TV Platform: Tizen 7</li>
                    <li>Wi-Fi Connectivity: Built-in</li>
                    <li>Game Mode: Yes</li>
                    <li>Tap View - Mirroring: Yes</li>
                    <li>NFT Support: Yes</li>
                </ul>
                <h3>Connections</h3>
                <ul>
                    <li>HDMI Ports: 3</li>
                    <li>USB Ports: 1</li>
                    <li>eARC/Dolby Atmos Support: Yes</li>
                    <li>Integrated Tuners: DVB-T2</li>
                </ul>
                <h3>Energy Rating</h3>
                <ul>
                    <li>Energy Rating: G - 112 kWh/1000h</li>
                </ul>
                <h3>Dimensions and Weight</h3>
                <ul>
                    <li>Width: 1449.4mm</li>
                    <li>Height: 830.3mm</li>
                    <li>Depth: 59.9mm</li>
                    <li>Height with Stand: 906.6mm</li>
                    <li>Width of Stand: 1185.5mm</li>
                    <li>Weight without Stand: 20.6kg</li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 3,149 </div>
                ₪
            </Button>
        </div>
    );
}

export default Television4;