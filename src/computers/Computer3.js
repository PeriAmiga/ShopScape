import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic3a from "../pictures/computers/pic3a.png";
import pic3b from "../pictures/computers/pic3b.png";
import pic3c from "../pictures/computers/pic3c.mp4";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Computer3({ setCartItems }) {

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
            <h1 ref={nameRef}>Asus TUF Gaming F16 FX607JU-N3073W Laptop - Mecha Gray Color</h1>
            <img ref={picRef} src={pic3a} alt="computer3a" />
            <img src={pic3b} alt="computer3b" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <video src={pic3c} autoPlay loop muted />
            <div className="description">
                <h3>Elegant Design</h3>
                The TUF Gaming F16 2024 maintains the classic design of the TUF series with a touch of innovation. The Mecha Gray version boasts a prominent TUF emblem, while the Jaeger Gray models come with a laser-etched emblem. Four small triangles frame the corners of the cover, and subtle TUF markings appear on the keyboard and touchpad.
                <br/>
                <h3>Performance</h3>
                Do it all without compromise. Dive straight into gaming and creation with powerful Intel® Core™ processors and a powerful NVIDIA® GeForce RTX graphics card, with support for NVIDIA® Advanced Optimus for smooth and efficient performance. The TUF Gaming F16 2024 also features fast RAM and an SSD that allows you to play and create without any issues and with maximum efficiency.
                <br/>
                <h3>Further with AI, Faster on RTX</h3>
                Experience first-class AI performance with GeForce RTX. Discover the advantage of RTX AI. Designed for the AI era, GeForce RTX graphics cards feature dedicated AI Tensor cores that deliver breakthrough performance and innovative capabilities. Leverage exclusive AI features and change the way you work and play. From enhanced creativity and highly efficient productivity to incredibly fast gaming, the ultimate power of AI is on RTX - today and tomorrow.
                <br/>
                <h3>Display</h3>
                A stunning visual world awaits. The new TUF Gaming F16 for 2024 comes with an all-encompassing display. High resolution, high refresh rate, and extremely fast response time, alongside G-SYNC technology, provide you with a sharp and breathtaking image in every game. Whether you prefer action-packed shooter games or thrilling adventures, the 16:10 aspect ratio and slim bezel with a 90% screen-to-body ratio will immerse you directly into the game with a deep and unforgettable viewing experience.
                <br/>
                <h3>Cooling</h3>
                Beat the competition! Processors with many cores generate more heat under full load. The TUF Gaming F16 can handle its powerful processor using a pair of Arc Flow Fans with 84 blades each. Asus' design across varying thicknesses provides a dual advantage of increasing pressure while reducing turbulence noise and improving cooling performance without unnecessary noise. Combined with 4 ventilation outlets and 5 dedicated heat pipes, the TUF Gaming F16 2024 maintains cool air even in the most demanding games.
                <br/>
                <h3>Durability</h3>
                Proven durability. As its name suggests, the TUF Gaming F16 has been meticulously tested to meet MIL-STD-810H standards for shock and impact resistance, as well as high altitude and high and low temperatures. You can be sure that your TUF Gaming F16 will perform at its peak wherever you take it.
                <br/>
                <h3>Audio</h3>
                Enhance your experience. Hear your content just as it's intended to be heard and know when every enemy is approaching. With Dolby Atmos and Hi-Res Audio support, your games and content will receive studio-quality both on the built-in speakers and headphones. For in-game voice chat or video calls, Two-Way AI Noise Cancellation technology filters out unwanted background noise and enables clear communication. New for 2024: the TUF Gaming F16 also comes with a built-in HD camera, making face-to-face video calls smooth and convenient, without the need for additional accessories.
                <br/>
                <h3>Control</h3>
                Full control at your fingertips. Dedicated shortcut keys for volume control, microphone mute, and access to Armoury Crate keep important commands within reach during gameplay. The large touchpad allows smooth scrolling effortlessly, and the desktop-style keyboard with a 1.7mm keystroke distance provides comfortable typing and quick response in games.
            </div>
            <h2>Technical Specifications</h2>
            <div className="datasheet">
                <ul>
                    <li>
                        <strong>Processor:</strong> 13th Gen Intel® Core™ i7-13650HX Processor 2.6 GHz 24M Cache, up to 4.9 GHz, 14 cores: 6 P-cores and 8 E-cores)
                    </li>
                    <li>
                        <strong>Graphics Accelerator:</strong> NVIDIA® GeForce RTX™ 4050 Laptop GPU 6GB GDDR6
                    </li>
                    <li>
                        <strong>Memory:</strong> 16GB (2x 8GB DDR5-4800 SO-DIMM)
                    </li>
                    <li>
                        <strong>Storage:</strong> 1TB PCIe® 4.0 NVMe™ M.2 SSD
                    </li>
                    <li>
                        <strong>Display:</strong>
                        <ul>
                            <li><strong>Panel Size:</strong> 16-inch</li>
                            <li><strong>Resolution:</strong> FHD+ 16:10 (1920 x 1200, WUXGA)</li>
                            <li><strong>Refresh Rate:</strong> 165Hz</li>
                            <li><strong>Viewing Angle:</strong> 85/85/85/85</li>
                            <li><strong>Panel Technology:</strong> IPS-level</li>
                            <li><strong>Brightness:</strong> 250</li>
                            <li><strong>Contrast:</strong> 1000:1</li>
                            <li><strong>NTSC %:</strong> 72.00%</li>
                            <li><strong>sRGB %:</strong> 100.00%</li>
                            <li><strong>Adobe %:</strong> 75.35%</li>
                            <li><strong>Anti-glare:</strong> Anti-glare display</li>
                            <li><strong>Adaptive-Sync technology:</strong> G-Sync</li>
                            <li><strong>Pantone:</strong> N/A</li>
                            <li><strong>Support Dolby Vision HDR:</strong> N/A</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Media:</strong>
                        <ul>
                            <li><strong>Speakers:</strong> 2-speaker system</li>
                            <li><strong>Audio Tech:</strong> AI noise-canceling technology, Dolby Atmos, Hi-Res certification (for headphone), Support Microsoft Cortana near field/far field</li>
                            <li><strong>Mic:</strong> Built-in array microphone</li>
                            <li><strong>Webcam:</strong> 720P HD camera</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Connectivity:</strong>
                        <ul>
                            <li><strong>Ethernet:</strong> 10/100/1000 Mbps</li>
                            <li><strong>Wireless:</strong> Wi-Fi 6(802.11ax) (Dual band) 2*2</li>
                            <li><strong>Bluetooth:</strong> Bluetooth® 5.2 Wireless Card (*Bluetooth® version may change with OS version different.)</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Ports and Outputs:</strong>
                        <ul>
                            <li>1x RJ45 LAN port</li>
                            <li>1x Thunderbolt™ 4 support DisplayPort™</li>
                            <li>1x USB 3.2 Gen 2 Type-C support DisplayPort™ / power delivery / G-SYNC</li>
                            <li>2x USB 3.2 Gen 1 Type-A</li>
                            <li>1x HDMI 2.1 FRL</li>
                            <li>1x 3.5mm Combo Audio Jack</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Keyboard:</strong> Backlit Chiclet Keyboard 1-Zone RGB
                    </li>
                    <li>
                        <strong>Battery:</strong> 90WHrs, 4S1P, 4-cell Li-ion
                    </li>
                    <li>
                        <strong>Power Adapter:</strong> ø6.0, 240W AC Adapter, Output: 20V DC, 12A, 240W, Input: 100~240C AC 50/60Hz universal
                    </li>
                    <li>
                        <strong>Dimensions:</strong> 35.5x25.2x2.21 ~ 2.82 cm
                    </li>
                    <li>
                        <strong>Weight:</strong> 2.27 Kg
                    </li>
                    <li>
                        <strong>Operating System:</strong> Windows 11 Home
                    </li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 7,299 </div>
                ₪
            </Button>
        </div>
    );
}

export default Computer3;