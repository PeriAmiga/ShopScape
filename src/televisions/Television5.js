import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic5 from "../pictures/televisions/pic5.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Television5({ setCartItems }) {

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
            <h1 ref={nameRef}>Toshiba 65'' Smart UHD 4K LED TV - Model 65C350ME - Metallic color</h1>
            <img ref={picRef} src={pic5} alt="television5" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>Toshiba 4K UHD LED C350ME</h3>
                <p>Experience stunning clarity with the C350ME series - every picture feels like the first time. The sharpest. Toshiba.</p>
                <h3>Uniform Brightness</h3>
                <p>Compared to conventional brightness, DLED technology provides more uniform brightness on the screen, ensuring a realistic and precise viewing experience.</p>
                <h3>A Window to a New World</h3>
                <p>The REGZA ZR processor with precise processing technology unlocks the full potential of the picture quality to achieve 4K resolution.</p>
                <h3>Immersive Gaming Experience</h3>
                <p>The C350ME maximizes rendering capabilities to make the picture look real and vivid, taking you into a true gaming experience on the battlefield!</p>
                <h3>Fast and Responsive</h3>
                <p>One of the fastest and smartest platforms in the smart TV market.</p>
                <h3>Rich Library of Apps and Content</h3>
                <p>With over 500 content providers worldwide, Toshiba offers the most up-to-date content.</p>
                <h3>Well-Balanced Sound - Immersive Audio Experience</h3>
                <p>REGZA Sound allows you to listen to sound as if you were in the scene, with audio coming from 2 Clear direct speakers that provide realistic and balanced sound.</p>
            </div>
            <h2>Technical Specifications</h2>
            <div className="datasheet">
                <h3>Features</h3>
                <ul>
                    <li>Stunning 4K clarity</li>
                    <li>4K Ultra HD resolution with Dolby Vision picture quality</li>
                    <li>Powerful Dolby Atmos sound</li>
                    <li>Luxurious Japanese design</li>
                    <li>Vidaa U 6.0 operating system with popular local and international content</li>
                    <li>REGZA processor for smooth viewing experience</li>
                    <li>Various display modes for gaming, sports, and cinema</li>
                    <li>GAME MODE PLUS</li>
                </ul>
                <h3>Technical Specifications</h3>
                <ul>
                    <li>HDR Compatibility: Dolby Vision, HDR10+, HDR10, HLG</li>
                    <li>Picture Processor: Quad Core</li>
                    <li>MEMC</li>
                    <li>ULTRA HD UPSCALING</li>
                    <li>10-BIT Color Depth Support</li>
                    <li>Codec Support: VP9, HEVC (H.265), MPEG 4</li>
                    <li>TV Tuner: DVB-T/T2 Built-in</li>
                    <li>Parental Control</li>
                    <li>PVR and TIME SHIFT</li>
                    <li>Hotel Mode</li>
                </ul>
                <h3>Smart TV</h3>
                <ul>
                    <li>Vidaa U 6.0 OS</li>
                    <li>Internet Browser</li>
                    <li>Digital Media Player (Video/Music/Photo)</li>
                    <li>Wi-Fi and Bluetooth connectivity</li>
                    <li>ANYVIEW STREAM - DLNA</li>
                    <li>Screen Mirroring (Tablet, Smartphone, Airplay2) and ANYVIEW CAST</li>
                    <li>RemoteNow App for Smartphone (Android & iOS)</li>
                    <li>App Store (Netflix, Youtube, Prime Video, etc.)</li>
                    <li>Auto Picture Mode</li>
                </ul>
                <h3>Connections</h3>
                <ul>
                    <li>3 HDMI 2.1 Ports</li>
                    <li>HDMI 1 (eARC)</li>
                    <li>2 USB Ports</li>
                    <li>1 Optical S/PDIF</li>
                    <li>1 RCA Audio Input</li>
                    <li>1 Headphone Jack</li>
                    <li>2 Antenna Inputs</li>
                    <li>1 AV Input</li>
                    <li>1 Wired Network (RJ45)</li>
                </ul>
                <h3>Audio</h3>
                <ul>
                    <li>Speaker Output: 2x15W</li>
                    <li>DOLBY ATMOS and DOLBY AUDIO support</li>
                    <li>AC4 support</li>
                    <li>Equalizer</li>
                </ul>
                <h3>Dimensions</h3>
                <ul>
                    <li>With Stand: Height 89.3cm, Width 145.3cm, Depth 31.8cm</li>
                    <li>Without Stand: Height 84cm, Width 145.3cm, Depth 7.6cm</li>
                    <li>Weight: 14.9kg (With Stand), 14.6kg (Without Stand)</li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 2,790 </div>
                ₪
            </Button>
        </div>
    );
}

export default Television5;