import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic6a from "../pictures/computers/pic6a.png";
import pic6b from "../pictures/computers/pic6b.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Computer6({ setCartItems }) {

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
            <h1 ref={nameRef}>Lenovo IdeaPad Flex 5-14ALC7 82R900E9IV Laptop with Touch Screen - Cloud Grey Color</h1>
            <img ref={picRef} src={pic6a} alt="computer6a" />
            <img src={pic6b} alt="computer6b" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>Endless Adaptability</h3>
                The Lenovo IdeaPad Flex 5 is a versatile laptop with a 360-degree hinge that adapts to your needs, moods, and various work environments. An advanced AMD processor and modern graphics accelerator make this computer your companion wherever you desire.
                <br/>
                <h3>Versatile Usage</h3>
                Create, play, stream, and work from any location, surface, or angle with a 360° hinge tested multiple times for maximum durability. Utilize the laptop in standard usage modes or in tablet mode. In laptop mode, the hinge mechanism delicately raises the keyboard to an ergonomic typing angle while covering the lower frame.
                <br/>
                <h3>Hyper-Realistic Imagery</h3>
                Witness images so lifelike and stunning that you'll forget you're staring at a screen. Enjoy display features such as: 100% sRGB for ultra-vivid color and exceptionally sharp details, TÜV certification for reduced eye strain during prolonged usage, and high brightness for outdoor viewing. Expand your field of view with a higher aspect ratio and slim bezels.
                <br/>
                <h3>High Performance with AMD Processor</h3>
                With advanced AMD processors and fast RAM, create content and play your games with gaming-level performance. Store more data faster and keep your computer cool and quiet even under heavy loads with intelligent cooling, allowing you to enjoy peace alongside performance.
            </div>
            <h2>Technical Specifications</h2>
            <div className="datasheet">
                <ul>
                    <li>
                        <strong>Processor:</strong> AMD Ryzen 5 5500U (6C / 12T, 2.1 / 4.0GHz, 3MB L2 / 8MB L3)
                    </li>
                    <li>
                        <strong>Memory:</strong> 16GB Soldered LPDDR4x-4266
                    </li>
                    <li>
                        <strong>Storage:</strong> 512GB SSD M.2 2242 PCIe® 4.0x4 NVMe®
                    </li>
                    <li>
                        <strong>Display:</strong>
                        <ul>
                            <li>14.0" Touchscreen</li>
                            <li>WUXGA (1920x1200) Resolution</li>
                            <li>Multi-touch</li>
                            <li>IPS Panel</li>
                            <li>300 nits Brightness</li>
                            <li>Glossy Surface</li>
                            <li>16:10 Aspect Ratio</li>
                            <li>800:1 Contrast Ratio</li>
                            <li>45% NTSC Color Gamut</li>
                            <li>TÜV Low Blue Light, DC dimming</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Graphics:</strong> Integrated AMD Radeon Graphics
                    </li>
                    <li>
                        <strong>Optical Drive:</strong> None
                    </li>
                    <li>
                        <strong>Network:</strong>
                        <ul>
                            <li>Wi-Fi 6 11ax, 2x2</li>
                            <li>Bluetooth 5.1</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Webcam:</strong> 1080p (FHD) webcam, support privacy shutter, fixed focus
                    </li>
                    <li>
                        <strong>Fingerprint Reader:</strong> Touch style fingerprint reader on palm rest
                    </li>
                    <li>
                        <strong>Audio:</strong>
                        <ul>
                            <li>Audio Chip: High Definition (HD) Audio, Realtek® ALC3287 codec</li>
                            <li>Speakers: Front-facing stereo speakers, 2W x2, optimized with Dolby® Audio™</li>
                            <li>Microphone: Dual array microphone with noise-cancelling</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Keyboard:</strong> Backlit, Hebrew
                    </li>
                    <li>
                        <strong>Card Reader:</strong> 4-in-1 card reader (SD, SDHC, SDXC, MMC)
                    </li>
                    <li>
                        <strong>Ports:</strong>
                        <ul>
                            <li>1x USB 3.2 Gen 1</li>
                            <li>1x USB 3.2 Gen 1 (Always On)</li>
                            <li>1x USB-C 3.2 Gen 2 (support data transfer, Power Delivery 3.0, and DisplayPort 1.4)</li>
                            <li>1x HDMI 1.4b</li>
                            <li>1x Card reader</li>
                            <li>1x Headphone / microphone combo jack (3.5mm)</li>
                            <li>1x Power connector</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Operating System:</strong> Windows 11 Home 64, Hebrew / English
                    </li>
                    <li>
                        <strong>Weight:</strong> Around 1.55 kg
                    </li>
                    <li>
                        <strong>Dimensions:</strong> 331.1x224.9x17.8 mm
                    </li>
                    <li>
                        <strong>Battery:</strong> Integrated 52.5Wh
                    </li>
                    <li>
                        <strong>Power Supply:</strong> 65W Round Tip (3-pin)
                    </li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 3,299 </div>
                ₪
            </Button>
        </div>
    );
}

export default Computer6;