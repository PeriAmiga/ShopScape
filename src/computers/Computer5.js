import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic5a from "../pictures/computers/pic5a.png";
import pic5b from "../pictures/computers/pic5b.png";
import pic5c from "../pictures/computers/pic5c.mp4";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Computer5({ setCartItems }) {

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
            <h1 ref={nameRef}>Acer Swift Go OLED SFG14-72-77SL Laptop without Touch Screen - Silver Color</h1>
            <img ref={picRef} src={pic5a} alt="computer5a" />
            <img src={pic5b} alt="computer5b" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <video src={pic5c} autoPlay loop muted />
            <div className="description">
                <h3>Swift Go</h3>
                Prepare, set, go!
                Say hello to the all-new Swift Go series - your AI companion on the go!
                Meet the Swift Go - your personal AI computer equipped with the powerful Intel® Core™ Ultra processor and a stunning OLED display.
                All wrapped in eye-catching elegance, sleekness, and lightweight design that takes you everywhere!
                <br/>
                <h3>Powered by Next-Gen Performance</h3>
                The Swift Go AI computer is equipped with the next-gen powerful Intel® Core™ Ultra 9 processor, paired with an integrated ™Intel® Arc graphics card. This combination delivers a leap in performance alongside improved power efficiency. With this power, you can easily tackle the most demanding tasks.
                <br/>
                <h3>Ready for an AI-Driven Future!</h3>
                The Swift Go leads the technology frontier and is ready to embrace the expanding possibilities of artificial intelligence. It integrates Intel's new AI engine, Intel® AI Boost, with Acer's unique AI solutions to provide more intuitive and enjoyable user experiences with artificial intelligence.
                <br/>
                <h3>Indulge Your Eyes</h3>
                Experience Swift Go with a high-quality OLED display that offers incredibly accurate color reproduction, stunning deep blacks, and exceptionally sharp image quality.
                <br/>
                <h3 style={{ textAlign: 'center' }}>Swift Go - The Perfect Laptop for You!</h3>
            </div>
            <h2>Technical Specifications</h2>
            <div className="datasheet">
                <ul>
                    <li>
                        <strong>Operating System:</strong> Windows 11 Home
                    </li>
                    <li>
                        <strong>Processor:</strong>
                        <ul>
                            <li><strong>Manufacturer:</strong> Intel®</li>
                            <li><strong>Type:</strong> Core™ Ultra 7</li>
                            <li><strong>Model:</strong> 155H</li>
                            <li><strong>Core:</strong> Hexadeca-core (16 Core™)</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Graphics and Display:</strong>
                        <ul>
                            <li><strong>Graphics Controller Manufacturer:</strong> Intel®</li>
                            <li><strong>Graphics Controller Model:</strong> ARC Graphics</li>
                            <li><strong>Graphics Memory Accessibility:</strong> Shared</li>
                            <li><strong>Screen Size:</strong> 35.6 cm (14")</li>
                            <li><strong>Display Screen Type:</strong> OLED</li>
                            <li><strong>Display Screen Technology:</strong> CineCrystal (Glare)</li>
                            <li><strong>Touchscreen:</strong> No</li>
                            <li><strong>Screen Resolution:</strong> 2880 x 1800</li>
                            <li><strong>Standard Refresh Rate:</strong> 90 Hz</li>
                            <li><strong>Display Features:</strong> 100% DCI-P3 Color Gamut</li>
                            <li><strong>Aspect Ratio:</strong> 16:10</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Memory:</strong>
                        <ul>
                            <li><strong>Total Installed System Memory:</strong> 16 GB</li>
                            <li><strong>Memory Card Reader:</strong> Yes</li>
                            <li><strong>Memory Card Supported:</strong> microSD</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Storage:</strong>
                        <ul>
                            <li><strong>Total Solid State Drive Capacity:</strong> 1 TB</li>
                            <li><strong>Solid State Drive Interface:</strong> PCIe NVMe</li>
                            <li><strong>SSD Form Factor:</strong> M.2</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Network and Communication:</strong>
                        <ul>
                            <li><strong>Wireless LAN Standard:</strong> IEEE 802.11ax</li>
                            <li><strong>Wireless LAN Model:</strong> Killer Wi-Fi 6E AX1675i</li>
                            <li><strong>Ethernet Technology:</strong> Gigabit Ethernet</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Built-in Devices:</strong>
                        <ul>
                            <li><strong>Camera:</strong> QHD</li>
                            <li><strong>Microphone:</strong> Yes</li>
                            <li><strong>Finger Print Reader:</strong> Yes</li>
                            <li><strong>Number of Speakers:</strong> 2</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Interfaces and Ports:</strong>
                        <ul>
                            <li><strong>HDMI:</strong> Yes</li>
                            <li><strong>Number of HDMI Outputs:</strong> 1</li>
                            <li><strong>Number of USB 3.2 Type-A Ports:</strong> 2</li>
                            <li><strong>Number of USB 4 Type-C Ports (Thunderbolt 4):</strong> 2</li>
                            <li><strong>Total Number of USB Ports:</strong> 4</li>
                            <li><strong>Network (RJ-45):</strong> No</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Input Devices:</strong>
                        <ul>
                            <li><strong>Pointing Device Type:</strong> TouchPad</li>
                            <li><strong>Keyboard Backlight:</strong> Yes</li>
                            <li><strong>TouchPad Features:</strong> OceanGlass Touchpad</li>
                            <li><strong>Keyboard Features:</strong> White Backlight, Caps Lock, Microphone Mute Indicator</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Battery:</strong>
                        <ul>
                            <li><strong>Battery Chemistry:</strong> Lithium Ion (Li-Ion)</li>
                            <li><strong>Battery Energy:</strong> 65 Wh</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Power:</strong> Maximum Power Supply Wattage: 100 W
                    </li>
                    <li>
                        <strong>Dimensions and Weight:</strong>
                        <ul>
                            <li><strong>Height:</strong> 14.90 mm</li>
                            <li><strong>Width:</strong> 312.9 mm</li>
                            <li><strong>Depth:</strong> 217.9 mm</li>
                            <li><strong>Weight (Approximate):</strong> 1.32 kg</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 5,849 </div>
                ₪
            </Button>
        </div>
    );
}

export default Computer5;