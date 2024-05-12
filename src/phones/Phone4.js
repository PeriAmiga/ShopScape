import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic4 from "../pictures/phones/pic4.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Phone4({ setCartItems }) {

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
            <h1 ref={nameRef}>OnePlus 12 5G mobile phone with 16GB RAM and 512GB storage - Silky Black color</h1>
            <img ref={picRef} src={pic4} alt="phone4" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>OnePlus 12: Redefining the Meaning of "Flow"</h3>
                <p>
                    The OnePlus 12 redefines the meaning of "flow". A flagship smartphone with powerful hardware and advanced software optimizations, the OnePlus 12 serves as a masterpiece for everything.
                </p>

                <h3>Powerful Performance</h3>
                <p>
                    The OnePlus 12 surpasses any Pro or Ultra concept, redefining the gold standard for flagship power and efficiency. With a powerful processor, LPDDR5X RAM, and a massive 5400mAh battery, you can glide your way to the top.
                </p>
                <h3>Double the Cool</h3>
                <p>
                    The latest Dual Cryo-Velocity VC redefines advanced cooling. New dual vapor chambers and the cutting-edge Laval technology provide OnePlus' largest cooling surface ever. Significantly improved heat dissipation efficiency ensures smooth performance at all times.
                </p>
                <h3>Flow in Full Display</h3>
                <p>
                    Introducing the entirely new ProXDR display. With a 2K 120Hz refresh rate and resolution, coupled with advanced LTPO technology, for brighter and more vibrant images. With Aqua Touch technology, screen movement flows like water.
                </p>
                <h3>Fourth-Generation Hasselblad Mobile Camera System</h3>
                <p>
                    The Hasselblad Pro camera now fits in your pocket with Sony's new LYT-808 main sensor, an advanced 64MP 3X Periscope telephoto camera, and an ultra-wide 114° camera. Capture immersive moments framed perfectly.
                </p>
                <h3>Smart Connectivity</h3>
                <p>
                    Multi-directional antennas and Smart Link provide faster, smoother, and more stable connectivity.
                </p>
                <h3>OxygenOS 14</h3>
                <p>
                    The iconic OxygenOS experience has evolved. Powered by the next generation Trinitiy engine, featuring innovative features and refreshing design elements. Experience peak speed and power with OxygenOS.
                </p>
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
                <div ref={costRef} className="cost"> 3,975 </div>
                ₪
            </Button>
        </div>
    );
}

export default Phone4;