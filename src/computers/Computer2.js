import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic2a from "../pictures/computers/pic2a.png";
import pic2b from "../pictures/computers/pic2b.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Computer2({ setCartItems }) {

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
            <h1 ref={nameRef}>HP Omen 16-WF1000NJ 9Y068EA Gaming Laptop - Shadow Black Color</h1>
            <img ref={picRef} src={pic2a} alt="computer2a" />
            <img src={pic2b} alt="computer2b" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>Enjoy Fun and Power Anywhere</h3>
                The HP OMEN gaming laptop is ready to go with you anywhere. Enjoy desktop-level power with an Intel® Core™ processor and modern NVIDIA® graphics card, with enhanced internal cooling. The impressive screen features high resolution, exceptionally smooth frame rates, and anti-glare and anti-reflection features.
                <br/>
                <h3>Desktop Power Anywhere</h3>
                The processor, graphics card, and memory can handle the most demanding games wherever you are. Enhanced performance and new features allow you to be anything you want - in gaming and beyond. Intel Core processors - play with power, work with intelligence. In addition, NVIDIA® GeForce RTX graphics cards are fast in a league of their own. They are powered by the NVIDIA Ada Lovelace architecture, which boosts performance and AI-based graphics. Experience realistic virtual worlds with advanced Ray Tracing capabilities and gaming at an exceptionally high FPS refresh rate.
                <br/>
                <h3>Excellent Cooling for a Laptop</h3>
                What good are the performance if the laptop sounds like a jet engine? That's why it's worth choosing the improved thermal design of OMEN.
                <br/>
                <h3>Smooth Display like Butter</h3>
                Prepare to be immersed in an experience, with a micro-edge screen frame on three sides of the screen and a high-resolution display with anti-glare features, this screen provides an extraordinary entertainment experience.
            </div>
            <h2>Technical Specifications</h2>
            <div className="datasheet">
                <ul>
                    <li>
                        <strong>Processor:</strong> Intel® Core™ i9-14900HX (up to 5.8 GHz with Intel® Turbo Boost Technology, 36 MB L3 cache, 24 cores, 32 threads)
                    </li>
                    <li>
                        <strong>Graphics Accelerator:</strong> NVIDIA® GeForce RTX™ 4080 Laptop GPU (12GB GDDR6 dedicated)
                    </li>
                    <li>
                        <strong>Memory:</strong> 32GB DDR5-5600 MHz RAM (2 x 16GB)
                    </li>
                    <li>
                        <strong>Storage:</strong> 1TB PCIe® Gen4 NVMe™ Performance M.2 SSD
                    </li>
                    <li>
                        <strong>Display:</strong>
                        <ul>
                            <li>Size: 16.1" diagonal</li>
                            <li>Resolution: QHD (2560x1440)</li>
                            <li>Type: IPS</li>
                            <li>Brightness: 300 nits</li>
                            <li>Surface: micro-edge, anti-glare</li>
                            <li>Color Gamut: 100% sRGB</li>
                            <li>Key Features: Refresh rate 240Hz, 3 ms response time, Low Blue Light</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Multimedia:</strong>
                        <ul>
                            <li>Audio: DTS:X® Ultra; Dual speakers; HP Audio Boost; HyperX</li>
                            <li>Camera: HP True Vision 1080p FHD camera with temporal noise reduction and integrated dual array digital microphones</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Connectivity:</strong>
                        <ul>
                            <li>Network Interface: Integrated 10/100/1000 GbE LAN</li>
                            <li>Wireless Connectivity: Intel® Wi-Fi 7 BE200 (2x2) and Bluetooth® 5.4 wireless card; Modern Standby (Connected); HP Extended Range Wireless LAN</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Ports and Outputs:</strong>
                        <ul>
                            <li>1x USB Type-A 5Gbps signaling rate</li>
                            <li>1x USB Type-A 5Gbps signaling rate (HP Sleep and Charge)</li>
                            <li>2x Thunderbolt™ 4 with USB Type-C® 40Gbps signaling rate (USB Power Delivery, DisplayPort™ 1.4, HP Sleep and Charge)</li>
                            <li>1x HDMI 2.1</li>
                            <li>1x RJ-45</li>
                            <li>1x Headphone/microphone combo</li>
                            <li>1x AC smart pin</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Keyboard:</strong> Full-size, 4-zone RGB backlit, shadow black keyboard and 26-Key Rollover Anti-Ghosting Key technology; HP Imagepad
                    </li>
                    <li>
                        <strong>Battery:</strong> 6-cell, 83Wh Li-ion polymer; Power: 280W Smart AC power adapter
                    </li>
                    <li>
                        <strong>Dimensions:</strong> 36.9x25.94x2.35 cm
                    </li>
                    <li>
                        <strong>Weight:</strong> 2.39 kg
                    </li>
                    <li>
                        <strong>Operating System:</strong> None
                    </li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 11,890 </div>
                ₪
            </Button>
        </div>
    );
}

export default Computer2;