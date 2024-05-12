import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic3 from "../pictures/televisions/pic3.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Television3({ setCartItems }) {

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
            <h1 ref={nameRef}>LG OLED B3 Smart TV - 77 inches, 4K resolution, Model: OLED77B36LA</h1>
            <img ref={picRef} src={pic3} alt="television3" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>α-REALISM TV: A Decade of Evolution</h3>
                <p>
                    Step into the world of α-REALISM, a realm evolving through 10 years of innovation. A portal to a new universe and a sensation of truly being there. Feel like the main character surrounded by immersive picture and extraordinary sound with our AI α7 4K Gen6 processor.
                </p>
                <h3>Immerse in a Cinematic Sound Kingdom</h3>
                <p>
                    AI Sound Pro actually mixes the sound to create the effect of upgraded 5.1.2 surround speakers, enhancing sound effects and balance control.
                </p>
                <h3>OLED Even Brighter</h3>
                <p>
                    Pixels reaching their full brightness potential with each having its own independent light. Illuminates the screen without the usual side effect of dimming caused by regular backlighting.
                </p>
                <h3>Integrated. Prominent.</h3>
                <p>
                    Inspire awe in your home with an exceptionally thin OLED TV that adds minimalist charm to your space.
                </p>
                <h3>Customized to Your Taste</h3>
                <p>
                    From your favorite content to your preferred viewing mode, webOS 23 new Home is a center that's all about you!
                </p>
                <h3>Embark on Gaming Adventures</h3>
                <p>
                    Feel like champions every time you play. With a quick response time of 0.1ms, NVIDIA G-Sync compatibility, AMD FreeSync Premium support, and VRR all working together to create an unbeatable clear and smooth image. Meanwhile, gamer-tuned UX and game streaming allow you to dive straight in and play at full throttle.
                </p>
                <h3>Quick Game Settings</h3>
                <p>
                    Tune in to the ideal settings for your game genre and desired gaming environment with Game Optimizer. Dive into the Sound Tab and enhance the action or the Game Tab to ensure everything looks and feels just the way you want it. No need to pause. Just access the game's on-screen menu, which hovers over the action while you play.
                </p>
            </div>
            <h2>Technical Specifications</h2>
            <div className="datasheet">
                <h3>Display</h3>
                <ul>
                    <li>100% Color Accuracy: Yes</li>
                    <li>Energy rating: F - 131 kWh/1000h</li>
                    <li>Backlight Dimming Technology: Pixel Dimming</li>
                    <li>Color Fidelity: 100% - Yes</li>
                    <li>Display Resolution: 4K Ultra HD (3,840 x 2,160)</li>
                    <li>Display Type: 4K OLED</li>
                    <li>Intense Color (Wide Color Gamut): Yes</li>
                    <li>Perfect Black: Yes</li>
                </ul>
                <h3>Video</h3>
                <ul>
                    <li>AI Picture: AI Picture Pro</li>
                    <li>HDR (High Dynamic Range): Dolby Vision / HDR10 / HLG</li>
                    <li>Motion: OLED Motion</li>
                    <li>Picture Processor: α5 AI Processor Gen6</li>
                    <li>Refresh Rate: 120Hz Native</li>
                    <li>Resolution Upscaler: AI Super Upscaling 4K</li>
                </ul>
                <h3>Platform</h3>
                <ul>
                    <li>Amazon Alexa Compatible: Yes</li>
                    <li>Content Partners: Apple TV, Disney+, HBO Max, Hulu, iHeartRadio, Netflix, Paramount+, Peacock, Prime Video, Spotify, Youtube TV</li>
                    <li>Full Web Browser: Yes</li>
                    <li>Google Home Compatible: Yes</li>
                    <li>Intelligent Voice Recognition: Yes</li>
                    <li>LG Channels: Yes</li>
                    <li>LG Content Store: Yes</li>
                    <li>LG ThinQ® AI: Yes</li>
                    <li>Magic Remote Control: Built-In</li>
                    <li>Operating System: webOS 23</li>
                    <li>Sports Alert: Yes</li>
                    <li>Who.Where.What?: Yes</li>
                    <li>"Works With": Amazon Alexa, Apple Airplay2, Apple Home, Hey Google</li>
                </ul>
                <h3>Gaming</h3>
                <ul>
                    <li>ALLM (Auto Low Latency Mode): Yes</li>
                    <li>Cloud Gaming: Nvidia GeForce Now, Utomik</li>
                    <li>FreeSync™: Yes</li>
                    <li>Game Optimizer: Yes</li>
                    <li>G-SYNC Compatible: Yes</li>
                    <li>HGiG: Yes</li>
                    <li>Response Time: > 1 ms</li>
                    <li>VRR (Variable Refresh Rate): Yes</li>
                </ul>
                <h3>Audio</h3>
                <ul>
                    <li>AI Sound Pro / AI Sound: AI Sound Pro (Virtual 5.1.2 Up-mix)</li>
                    <li>Audio Codec: AAC, AC3 (Dolby Digital), AC4, apt-X, EAC3, HE-AAC, MP2, MP3, PCM, WMA</li>
                    <li>Bluetooth Surround Ready: Yes</li>
                    <li>Dolby Atmos: Yes</li>
                    <li>DTS Decoder: Yes</li>
                    <li>LG Sound Sync: Yes</li>
                    <li>Output Power: 20 W</li>
                    <li>Speaker Direction: Down Firing</li>
                    <li>Speaker System: 2.0 Channel</li>
                    <li>TV Sound Mode Share: Yes</li>
                    <li>WiSA Ready: Yes</li>
                </ul>
                <h3>Connectivity</h3>
                <ul>
                    <li>Bluetooth® Support: Yes (v 5.0)</li>
                    <li>Ethernet Input: 1</li>
                    <li>HDMI Audio Return Channel (ARC): eARC (HDMI 3)</li>
                    <li>HDMI Input: 4 (supports 4K 120Hz, eARC, VRR, ALLM, QMS as specified in HDMI 2.1 - 2 ports)</li>
                    <li>HDMI-CEC (Simplink): Yes</li>
                    <li>IP Control: Yes</li>
                    <li>RF Connection Input (Antenna/Cable): 1</li>
                    <li>RS-232C Input (Mini Jack): Yes</li>
                    <li>Smart Phone Connectivity: Yes</li>
                    <li>TV Tuner: ATSC, Clear QAM</li>
                    <li>USB Ports (v 2.0): 2</li>
                    <li>Wi-Fi® Standard: Wi-Fi Certified (Wi-Fi 5)</li>
                </ul>
                <h3>Power</h3>
                <ul>
                    <li>Power Consumption: 146 W</li>
                    <li>Power Supply (Voltage, Hz): AC 120V, 50/60Hz</li>
                    <li>Standby Power Consumption: Under 0.5</li>
                </ul>
                <h3>Dimensions and Weight</h3>
                <ul>
                    <li>TV Dimensions: 1723x992x55.3mm</li>
                    <li>Packaging Dimensions: 1879x1130x285mm</li>
                    <li>TV Weight: 26.7kg</li>
                    <li>Packaging Weight: 42.8kg</li>
                    <li>VESA Mounting: 400x200</li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 10,590 </div>
                ₪
            </Button>
        </div>
    );
}

export default Television3;