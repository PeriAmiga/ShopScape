import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic1a from "../pictures/smartwatches/pic1a.png";
import pic1b from "../pictures/smartwatches/pic1b.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function SmartWatch1({ setCartItems }) {

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
            <h1 ref={nameRef}>Apple Watch 45mm Series-9 GPS+Cellular, Graphite Stainless Steel Case, Graphite Milanese Loop strap, One Size</h1>
            <img ref={picRef} src={pic1a} alt="smartwatch1" />
            <img src={pic1b} alt="smartwatch1" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>Apple Watch Series 9: Smarter, Brighter, Stronger</h3>
                <p>
                    The most powerful chip ever in an Apple Watch. A new and magical way to use your Apple Watch without touching the screen. Twice as bright display. And now you can choose a watch case and strap combination that's neutral to carbon.
                </p>

                <h3>New S9 SiP Processor</h3>
                <p>
                    A leap forward. The custom-designed Apple silicon chip makes the Apple Watch Series 9 more efficient, intuitive, and faster. The new dual-core processor includes 5.6 billion transistors - 60% more than the S8 chip. A new Neural engine with four cores processes machine learning tasks up to twice as fast. It enables several innovations, including a new gesture - Double Tap.
                </p>

                <h3>Double Tap Gesture</h3>
                <p>
                    Magic. At your fingertips.
                    Double Tap gestures make the Apple Watch easier to use anytime, especially when your hands are full. Simply tap your finger and thumb together to answer a call, open a notification, play and pause music, and more.
                </p>

                <h3>Enhanced Display</h3>
                <p>
                    Brightness breakthrough.
                    The advanced display system in Series 9 enhances maximum brightness to 2000 nits - twice that of Series 8 - so you can read more easily in full sunlight. It's also better in low-light conditions, like in a cinema, as it dims to just 1 nit.
                </p>

                <h3>watchOS 10</h3>
                <p>
                    Refreshed. Amazing.
                    The watchOS 10 update brings more to your screen than ever before. Nearly every app has been completely redesigned to give you more information at a glance. From any watch face, simply rotate the digital crown to reveal the Smart Stack with widgets for relevant and up-to-date information. And now, with insights into mental and visual health, you can track your body and mind - right from your wrist.
                </p>

                <h3>Health</h3>
                <p>
                    Powerful insights at a glance.
                    The Apple Watch helps you better understand your physical and mental health. Health data is kept private and secure. When you're ready to share with your healthcare provider, friends, or family, you're in control.
                </p>

                <h3>Connectivity</h3>
                <p>
                    Everything at the pace of life.
                    The Apple Watch keeps you connected to the people and things you love, right from your wrist. And with a cellular plan, you can do it all without your iPhone nearby.
                    Wireless service plan required for cellular service. Contact your service provider for details. Connection may vary depending on network availability. See apple.com/watch/cellular for participating wireless carriers and eligibility. See support.apple.com/HT207578 for additional setup instructions.
                </p>

                <h3>Fitness</h3>
                <p>
                    Simply motivating.
                    No matter what workout you have in mind, it's definitely at your fingertips and available to you with just one tap. See all the metrics you need to keep motivation in customizable displays. Plus, durability makes it easy for you to give it your all without worrying about how your Apple Watch will hold up.
                </p>
            </div>
            <div className="datasheet">
                <h2>Technical Specifications</h2>
                <h3>Model</h3>
                <p>MRMX3QI/A</p>
                <h3>Watch Color</h3>
                <p>Graphite Stainless Steel Case</p>
                <h3>Band Color</h3>
                <p>Graphite Milanese Loop</p>
                <h3>Display</h3>
                <p>Type: Retina Always-On LTPO OLED</p>
                <p>Protection: Sapphire crystal glass</p>
                <p>Brightness: 2000 nits (peak)</p>
                <h3>Chipset</h3>
                <p>Chipset: S9 SiP</p>
                <p>CPU: Dual-core</p>
                <p>GPU: PowerVR</p>
                <h3>Connectivity</h3>
                <p>GPS+Cellular</p>
                <p>WLAN: Wi-Fi 802.11 b/g/n, dual-band</p>
                <p>Bluetooth: 5.3, A2DP, LE</p>
                <p>Positioning: GPS, GLONASS, GALILEO, QZSS, BDS</p>
                <p>NFC: Yes</p>
                <p>Radio: No</p>
                <p>USB: No</p>
                <h3>Sensors</h3>
                <p>Accelerometer, gyro, heart rate, barometer, always-on altimeter, compass, SpO2, VO2max, temperature (body)</p>
                <p>Temperature sensing (0.01˚ accuracy)</p>
                <p>Natural language commands and dictation (talking mode)</p>
                <h3>Power</h3>
                <p>Type: Li-Ion, non-removable</p>
                <p>Charging: Wireless</p>
                <h3>Dimensions</h3>
                <p>Size: 45mm</p>
                <p>Weight: 51.5g</p>
                <h3>Apple Watch Box Contents</h3>
                <p>✓ Apple Watch Case</p>
                <p>✓ Apple Watch Milanese Loop</p>
                <p>✓ Apple Watch Magnetic Fast Charger to USB-C Cable (1 m)</p>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 3,669 </div>
                ₪
            </Button>
        </div>
    );
}

export default SmartWatch1;