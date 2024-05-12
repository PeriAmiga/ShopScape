import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic1a from "../pictures/computers/pic1a.png";
import pic1b from "../pictures/computers/pic1b.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Computer1({ setCartItems }) {

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
            <h1 ref={nameRef}>Lenovo Legion Pro 7 16IRX8H 82WQ004DIV Laptop - Onyx Grey Color</h1>
            <img ref={picRef} src={pic1a} alt="computer1a" />
            <img src={pic1b} alt="computer1b" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>Advanced ™Intel® Core processors. Enjoy enhanced performance</h3>
                Intel's most advanced hybrid architecture, combined with industry-leading features, provides the ultimate gaming experience. Flow, create, and compete at the highest levels - Advanced Intel Core processors push your gaming beyond performance, giving you the power to do it all.
                <br/>
                <h3>NVIDIA® GeForce RTX™ graphics cards. Full power. Beyond speed.</h3>
                NVIDIA® GeForce RTX™ 40 graphics accelerators are faster than ever for gamers and creators. They are powered by the highly efficient NVIDIA Ada Lovelace architecture, which delivers a performance and AI-driven graphics leap. Experience lifelike virtual worlds with ray tracing and highly immersive FPS games with minimal latency. Discover revolutionary ways to create unprecedented workflow acceleration.
                <br/>
                <h3>Smarter gaming for everyone</h3>
                Powered by the revolutionary LA-2Q AI chip, the +Lenovo Legion AI Engine is always smart. By leveraging a row of real-time system sensors across key components, the +Lenovo AI Engine deploys a smart engine to maximize your FPS gaming. Furthermore, the smart engine improves over time, ensuring your system can achieve maximum performance to stay ahead of the competition both inside and outside the box from the moment you open the box and for many years to come.
                <br/>
                <h3>A display born to compete</h3>
                Quickly find your enemies with the innovative Lenovo PureSight Gaming display. With a variable refresh rate, a 16-inch IPS display, and a 16:10 aspect ratio, the Legion Pro 7i Gen 8 laptop is perfect for a large image, fast reflexes, and precise aiming. The screen covers 93.6% of the display's surface area, making it look like your image is floating in space. In addition, HDR and high color accuracy allow you to see every detail in your game, no matter how bright or dark the gaming environment is.
                <br/>
                <h3>Maximum power</h3>
                Enjoy unmatched battery power with the Legion Pro 7i Gen 8 laptop. Equipped with a 99.99Whr battery, the largest legal battery that can be placed in a laptop! Super Rapid Charge technology ensures that the battery charges quickly and allows you to enjoy long battery life.
                <br/>
                <h3>Real-time command, control, and assault</h3>
                The Legion Pro 7i Gen 8 laptop features the Legion TrueStrike gaming keyboard, the perfect control set for gamers who demand precision and great customization options. This full-size keyboard also features full-size arrow keys and a full-size number pad, and a large Mylar touchpad that gives you everything you need to control.
                <br/>
                <h3>Nahimic Audio</h3>
                Nahimic by SteelSeries drastically enhances your gaming experience by delivering unparalleled immersive 3D audio designed specifically for gamers. Experience clear communication with your teammates, allowing you to enjoy audio streaming like a professional streamer. Nahimic doesn't just let you play your games - it lets you live them.
            </div>
            <h2>Technical Specifications</h2>
            <div className="datasheet">
                <ul>
                    <li>
                        <strong>Processor:</strong>
                        <ul>
                            <li>Intel® Core™ i9-13900HX, 24C (8P + 16E) / 32T</li>
                            <li>P-core up to 5.4GHz, E-core up to 3.9GHz</li>
                            <li>36MB</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Graphics Accelerator:</strong>
                        <ul>
                            <li>NVIDIA® GeForce RTX™ 4080 12GB GDDR6</li>
                            <li>Boost Clock: 2280MHz</li>
                            <li>TGP: 175W</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Memory:</strong>
                        <ul>
                            <li>32GB, 2x 16GB SO-DIMM DDR5-5600</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Storage:</strong>
                        <ul>
                            <li>1TB SSD M.2 2280 PCIe® 4.0x4 NVMe®</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Display:</strong>
                        <ul>
                            <li>Size: 16"</li>
                            <li>Resolution: WQXGA (2560x1600)</li>
                            <li>Touch: None</li>
                            <li>Type: IPS</li>
                            <li>Brightness: 500 nits</li>
                            <li>Surface: Anti-glare</li>
                            <li>Aspect Ratio: 16:10</li>
                            <li>Contrast Ratio: 1200:1</li>
                            <li>Color Gamut: 100% sRGB</li>
                            <li>Viewing Angle: 178°</li>
                            <li>Key Features:
                                <ul>
                                    <li>Refresh rate: 240Hz</li>
                                    <li>DisplayHDR™ 400</li>
                                    <li>Dolby® Vision™</li>
                                    <li>NVIDIA G-SYNC®</li>
                                    <li>Advanced Optimus support</li>
                                    <li>TÜV Low Blue Light</li>
                                    <li>TÜV High Gaming Performance</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Multimedia:</strong>
                        <ul>
                            <li>Audio Chip: High Definition (HD) Audio, Realtek® ALC3306 codec</li>
                            <li>Speakers: Stereo speakers (super linear speaker), 2W x2, audio by HARMAN certification, optimized with Nahimic Audio, Smart Amplifier (AMP)</li>
                            <li>Microphone: Dual-microphone array</li>
                            <li>Camera: FHD 1080p, with E-shutter, fixed focus</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Connectivity:</strong>
                        <ul>
                            <li>Ethernet: 100/1000M (RJ-45)</li>
                            <li>WLAN + Bluetooth: Intel® Killer Wi-Fi® 6E AX1675i, 11ax 2x2 + BT5.1</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Ports and Outputs:</strong>
                        <ul>
                            <li>Standard Ports:
                                <ul>
                                    <li>3x USB 3.2 Gen 1</li>
                                    <li>1x USB 3.2 Gen 1 (Always On)</li>
                                    <li>1x USB-C® 3.2 Gen 2 (support data transfer, Power Delivery 140W and DisplayPort™ 1.4)</li>
                                    <li>1x Thunderbolt™ 4 (support data transfer, Power Delivery and DisplayPort™ 1.4)</li>
                                    <li>1x HDMI®, up to 8K/60Hz</li>
                                    <li>1x Ethernet (RJ-45)</li>
                                    <li>1x Headphone / microphone combo jack (3.5mm)</li>
                                    <li>1x Power connector</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Keyboard:</strong> Per-key RGB Backlit (with Lighting Lens), Hebrew
                    </li>
                    <li>
                        <strong>Battery:</strong>
                        <ul>
                            <li>Integrated Li-Polymer 99.9Wh battery, supports Super Rapid Charge (10min charge 0~30% capacity, 30min charge 0~70% capacity, 80min charge 0~100% capacity)</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Power Adapter:</strong> 330W slim tip (3-pin) AC adapter, 100-240V, 50-60Hz
                    </li>
                    <li>
                        <strong>Dimensions:</strong>
                        <ul>
                            <li>363.4 x 262.15 x 21.95-25.9 mm</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Weight:</strong> Less than 2.8 kg
                    </li>
                    <li>
                        <strong>Operating System:</strong> Windows® 11 Home, Hebrew / English
                    </li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 14,690 </div>
                ₪
            </Button>
        </div>
    );
}

export default Computer1;