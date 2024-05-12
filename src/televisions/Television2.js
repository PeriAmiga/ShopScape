import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic2 from "../pictures/televisions/pic2.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Television2({ setCartItems }) {

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
            <h1 ref={nameRef}>Sony Bravia A80L 83" 4K Ultra HD HDR Smart TV OLED XR-83A80LAEP</h1>
            <img ref={picRef} src={pic2} alt="television2" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>Pure Blacks, Exceptional Brightness</h3>
                <p>
                    Experience pure black tones and exceptional brightness with our Cognitive Processor XR™ and OLED screen, delivering images closer to reality than ever before.
                </p>
                <h3>Realistic Contrast</h3>
                <p>
                    The secret lies in peak brightness and pure black tones. Suddenly, you'll see all the details, depth, and texture that certain screens often miss.
                </p>
                <h3>Immersive Sound</h3>
                <p>
                    As the story unfolds before your eyes, you'll hear soundtracks that perfectly match the action. Much like in a theater.
                </p>
                <h3>The Entertainment You Love. With Google's Help.</h3>
                <p>
                    Google TV centralizes your movies, shows, and more from your apps and subscriptions and organizes them for you.
                </p>
                <h3>Sleek Design. Narrow Frame. Immersive Experience.</h3>
                <p>
                    The narrow display frame is designed to maximize the size of the screen you see and keep your focus where it's supposed to be.
                </p>
            </div>
            <h2>Technical Specifications</h2>
            <div className="datasheet">
                <h3>Model</h3>
                <p>XR-83A80LAEP</p>
                <h3>Dimensions</h3>
                <ul>
                    <li>Size: 83 inches</li>
                    <li>Width: 185 cm</li>
                    <li>Height: 106 cm</li>
                    <li>Depth: 5.3 cm</li>
                    <li>Weight: 42 kg</li>
                </ul>
                <h3>Display</h3>
                <ul>
                    <li>Resolution: 3840x2160</li>
                    <li>OLED</li>
                    <li>Pixel Contrast Booster</li>
                    <li>XR Triluminos Pro</li>
                    <li>XR OLED Motion Panel 120Hz</li>
                    <li>4K HDR (HDR10 / HLG / Dolby Vision)</li>
                    <li>Various Picture Modes: IMAX, Cinema, Standard, Bright, Game, Photography, Dolby Vision, etc.</li>
                    <li>Dual database processing</li>
                    <li>Precision Color Mapping</li>
                    <li>XR Smoothing</li>
                    <li>XR HDR Remaster</li>
                    <li>XR Super Resolution</li>
                    <li>XR Clear Image</li>
                </ul>
                <h3>Audio</h3>
                <ul>
                    <li>Acoustic Auto Calibration</li>
                    <li>Dolby Codecs Support: Dolby Atmos, Dolby Audio</li>
                    <li>Bluetooth Audio Support for soundbars/headphones</li>
                    <li>Vertical Surround Engine</li>
                    <li>3D Surround Upscaling</li>
                    <li>Voice Zoom 2</li>
                    <li>Audio Options: Standard, Dialog, Cinema, Music, Sport, Dolby</li>
                </ul>
                <h3>Gaming</h3>
                <ul>
                    <li>Auto HDR Tone Mapping</li>
                    <li>Auto Genre Picture Mode</li>
                    <li>Game Menu</li>
                    <li>Crosshair (6 types)</li>
                    <li>Black Equalizer</li>
                    <li>Motion Blur Reduction</li>
                    <li>4K120 / VRR (Variable Refresh Rate) / ALLM (Auto Low Latency Mode)</li>
                    <li>Low Latency Mode</li>
                </ul>
                <h3>Connectivity</h3>
                <ul>
                    <li>2 USB ports</li>
                    <li>4 HDMI ports (Inputs 3/4 support Gaming mode* 4K120)</li>
                    <li>Ethernet Network Connection</li>
                    <li>1 RF Antenna Input</li>
                    <li>2 IF Antenna Inputs (Satellite)</li>
                    <li>1 AC Power Input</li>
                    <li>1 Analog Audio Output – SPEAKER S</li>
                    <li>1 Optical Digital Audio Output</li>
                    <li>1 Analog Audio Input</li>
                    <li>Built-in Screen Microphone</li>
                    <li>2.4GHz / 5GHz Built-in Wi-Fi</li>
                    <li>Wi-Fi Direct</li>
                    <li>Home Network Client</li>
                </ul>
                <h3>Power</h3>
                <ul>
                    <li>Standby Power Consumption: 0.5W</li>
                    <li>Power Consumption: 847W</li>
                    <li>Energy Rating: F - 149kWh/1000h</li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 21,870 </div>
                ₪
            </Button>
        </div>
    );
}

export default Television2;