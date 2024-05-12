import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic4a from "../pictures/computers/pic4a.png";
import pic4b from "../pictures/computers/pic4b.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Computer4({ setCartItems }) {

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
            <h1 ref={nameRef}>HP Laptop 15S-FQ5009NJ / 8J105EA - White Color</h1>
            <img ref={picRef} src={pic4a} alt="computer2a" />
            <img src={pic4b} alt="computer2b" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>Lightweight and Long Battery Life</h3>
                A lightweight laptop for work or play, whenever you need it. Get things done, all day long and wherever you prefer, thanks to its lightweight design and long battery life. Enjoy comfortable computer work with a smooth screen and experience reliable performance.
                <br/>
                <h3>Stay Connected with Long Battery Life</h3>
                Long battery life and HP's fast charging technology allow you to work, watch, and stay connected all day long.
            </div>
            <h2>Technical Specifications</h2>
            <div className="datasheet">
                <ul>
                    <li>
                        <strong>Processor:</strong> Intel® Core™ i3-1215U (up to 4.4 GHz with Intel® Turbo Boost Technology, 10 MB L3 cache, 6 cores, 8 threads)
                    </li>
                    <li>
                        <strong>Graphics Accelerator:</strong> Integrated: Intel® UHD Graphics
                    </li>
                    <li>
                        <strong>Memory:</strong> 8 GB DDR4-3200 MHz RAM (1 x 8 GB)
                    </li>
                    <li>
                        <strong>Storage:</strong> 512 GB PCIe® NVMe™ M.2 SSD
                    </li>
                    <li>
                        <strong>Display:</strong>
                        <ul>
                            <li><strong>Size:</strong> 15.6" diagonal</li>
                            <li><strong>Resolution:</strong> FHD (1920 x 1080)</li>
                            <li><strong>Aspect ratio:</strong> 16:9</li>
                            <li><strong>Brightness:</strong> 250 nits</li>
                            <li><strong>Surface:</strong> micro-edge, anti-glare</li>
                            <li><strong>Color Gamut:</strong> 45% NTSC</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Media:</strong>
                        <ul>
                            <li><strong>Audio:</strong> Dual speakers</li>
                            <li><strong>Camera:</strong> Webcam - HP True Vision 720p HD camera with temporal noise reduction and integrated dual array digital microphones</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Connectivity:</strong>
                        <ul>
                            <li><strong>Wireless connectivity:</strong> MediaTek Wi-Fi 6 MT7921 (2x2) and Bluetooth® 5.3 wireless card (supporting gigabit data rate)</li>
                            <li><strong>MU-MIMO supported; Modern Standby (Connected); Miracast® compatible</strong></li>
                        </ul>
                    </li>
                    <li>
                        <strong>Ports and Outputs:</strong>
                        <ul>
                            <li>1x USB Type-C® 5Gbps signaling rate (supports data transfer only and does not support charging or external monitors)</li>
                            <li>2x USB Type-A 5Gbps signaling rate</li>
                            <li>1x HDMI 1.4b</li>
                            <li>1x headphone/microphone combo</li>
                            <li>1x AC smart pin</li>
                            <li><strong>Expansion slots:</strong> 1 multi-format SD media card reader</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Keyboard:</strong> Full-size, snow white keyboard with numeric keypad - HP Imagepad with multi-touch gesture support
                    </li>
                    <li>
                        <strong>Battery:</strong> Battery type: 3-cell, 41 Wh Li-ion - Power: 45 W Smart AC power adapter
                    </li>
                    <li>
                        <strong>Dimensions:</strong> 35.85x24.2x1.79 cm
                    </li>
                    <li>
                        <strong>Weight:</strong> 1.69 kg
                    </li>
                    <li>
                        <strong>Operating System:</strong> Windows 11 Home
                    </li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 1,990 </div>
                ₪
            </Button>
        </div>
    );
}

export default Computer4;