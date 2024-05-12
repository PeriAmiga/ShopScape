import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic1 from "../pictures/phones/pic1.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Phone1({ setCartItems }) {

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
            <h1 ref={nameRef}>Samsung Galaxy S24 Ultra 12GB+256GB (SM-S928B/DS) - Titanium Black color</h1>
            <img ref={picRef} src={pic1} alt="phone1" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>Elegant Design</h3>
                The Samsung Galaxy S24 Ultra redefines elegance with its exquisite design and premium materials. Crafted with precision and attention to detail, it features a seamless blend of metal and glass, creating a luxurious feel in the palm of your hand. The device's slim profile and curved edges offer a comfortable grip and a visually stunning appearance. Available in a range of captivating colors, including Phantom Black, Mystic Bronze, and Cloud White, the Galaxy S24 Ultra allows you to express your personal style with sophistication.
                <br/>
                <h3>Performance</h3>
                Elevate your mobile experience with the exceptional performance of the Samsung Galaxy S24 Ultra. Powered by the latest Exynos processor and paired with cutting-edge graphics technology, this flagship device delivers unrivaled speed and efficiency. Whether you're navigating through multiple apps, streaming high-definition content, or engaging in intense gaming sessions, the Galaxy S24 Ultra ensures smooth and responsive performance with no compromises.
                <br/>
                <h3>AI-Powered Innovation</h3>
                Experience the future of mobile technology with AI-powered innovations on the Samsung Galaxy S24 Ultra. From intelligent camera features that optimize your photos in real-time to personalized voice assistants that adapt to your preferences, AI enhances every aspect of your smartphone experience. With Samsung's commitment to innovation, the Galaxy S24 Ultra seamlessly integrates AI into its ecosystem, anticipating your needs and enhancing your productivity and creativity.
                <br/>
                <h3>Display</h3>
                Immerse yourself in a visual masterpiece with the Samsung Galaxy S24 Ultra's stunning display. Featuring a dynamic AMOLED panel with HDR10+ support, it delivers breathtaking colors, deep blacks, and incredible contrast. Whether you're watching movies, browsing photos, or playing games, the Galaxy S24 Ultra's immersive display brings content to life with unparalleled clarity and vibrancy. With a high refresh rate and ultra-smooth scrolling, every interaction feels fluid and responsive, elevating your viewing experience to new heights.
                <br/>
                <h3>Camera</h3>
                Unleash your creativity and capture memories in stunning detail with the Samsung Galaxy S24 Ultra's revolutionary camera system. Equipped with a versatile quad-camera setup, including wide, ultra-wide, telephoto, and depth sensors, it empowers you to shoot like a pro in any scenario. From breathtaking landscapes to close-up portraits, the Galaxy S24 Ultra's advanced optics and intelligent software deliver professional-quality results every time. With features like Night Mode, Portrait Mode, and AI-enhanced scene recognition, you can take your photography to the next level and express your unique vision with confidence.
                <br/>
                <h3>Battery</h3>
                Stay connected and productive throughout the day with the Samsung Galaxy S24 Ultra's long-lasting battery life. With a high-capacity battery and intelligent power management features, it optimizes power consumption to maximize uptime and minimize downtime. Whether you're working remotely, streaming media, or multitasking on the go, the Galaxy S24 Ultra keeps up with your busy lifestyle, ensuring you never miss a moment or opportunity.
                <br/>
                <h3>Security</h3>
                Protect your personal data and privacy with advanced security features on the Samsung Galaxy S24 Ultra. Utilizing a multi-layered approach to security, including biometric authentication methods like facial recognition and fingerprint scanning, it safeguards your device and information from unauthorized access. With Samsung Knox security platform built-in, you can trust that your sensitive data remains secure and your privacy is protected at all times, giving you peace of mind in an increasingly connected world.
            </div>
            <div className="datasheet">
                <h2>Technical Specifications</h2>
                <h3>Rear Cameras</h3>
                <ul>
                    <li>Primary: 200MP</li>
                    <li>Wide-angle: 12MP</li>
                    <li>Telephoto: 50MP X3</li>
                    <li>Telephoto 2: 10MP X3</li>
                </ul>
                <h3>Front Camera</h3>
                <p>12MP Dual Pixel AF</p>
                <h3>Processor</h3>
                <p>Snapdragon 8 Gen3</p>
                <p>4nm</p>
                <h3>Display</h3>
                <ul>
                    <li>6.8 inches</li>
                    <li>Dynamic AMOLED 2X</li>
                    <li>QHD+ (3120 x 1440)</li>
                    <li>505ppi, 1-120Hz</li>
                    <li>2600Nits</li>
                </ul>
                <h3>Memory and Storage</h3>
                <p>12GB RAM + 256GB</p>
                <h3>Battery and Charging</h3>
                <p>5,000mAh, 45W</p>
                <h3>Dimensions and Weight</h3>
                <p>Dimensions: 79x162.3x8.6 mm</p>
                <p>Weight: 232 grams</p>
                <h3>Additional Features</h3>
                <ul>
                    <li>Under-display fingerprint sensor</li>
                    <li>Built-in pen S + built-in AI</li>
                    <li>Water and dust resistance: IP68</li>
                    <li>Gorilla Glass Armor</li>
                    <li>Reinforced titanium frame</li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 4,989 </div>
                ₪
            </Button>
        </div>
    );
}

export default Phone1;