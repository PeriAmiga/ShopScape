import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic3 from "../pictures/phones/pic3.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Phone3({ setCartItems }) {

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
            <h1 ref={nameRef}>Asus ROG Phone 8 Pro Edition 24GB + 1TB - Phantom Black color - includes Aero cover and AeroActive Cooler X cooling system</h1>
            <img ref={picRef} src={pic3} alt="phone3" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>Revolutionizing Mobile Gaming</h3>
                Step into the future of mobile gaming with the revolutionary Asus ROG Phone 8 Pro. It combines unparalleled gaming prowess with everyday elegance, creating a gaming smartphone that is also a premium device. Powered by the Snapdragon® 8 Gen 3 Mobile Platform, featuring enhanced thermal design for unmatched performance, the ROG Phone 8 Pro boasts a 6.78-inch AMOLED display with LTPO technology, delivering peak brightness of up to 2500 nits. Capture moments like a pro with its triple-camera system equipped with a 6-axis hybrid gimbal stabilizer and 3x telephoto lens.
                <br/>
                <h3>Innovative Design</h3>
                The ROG Phone 8 Pro series has been completely redesigned, marking the biggest leap in its long history. Evolving from a regular gaming smartphone to a futuristic premium device, it features a thin and lightweight body with thinner bezels, making it the perfect lifestyle smartphone for everyone. The AniMe Vision mini-LED lighting with 341 LED lights allows for personalized animations or customizations, disappearing completely when not in use to provide an elegant and discreet look. With an IP68² rating, it ensures dust and water resistance, enabling gaming wherever and whenever you want without worries.
                <br/>
                <h3>Advanced Gaming Features</h3>
                Built-in AirTrigger controls provide unparalleled gaming control with a console-like experience. The AirTrigger buttons support a wide range of gestures, including double-tap, press and hold, and gyro-based direction. Enjoy maximum control with these innovative features. The ROG engineers have discovered the ultimate passive cooling solution, the 360° SoC Gen 2 cooling system, which positions a rapid cooling conductor between the SoC and the metal adjacent to the rear cover, ensuring even heat dispersion across all thermal layers.
                <br/>
                <h3>Professional-grade Cameras</h3>
                The ROG Phone 8 Pro features a triple-camera system that offers endless possibilities. Capture ultra-wide shots, zoom in on distant objects, or record exceptionally stable videos on the go. The main camera boasts a Sony IMX890 50MP sensor with a wide 24mm lens, perfect for street photography. With its 2x zoom mode, the built-in lens becomes equivalent to a 50mm prime lens, ideal for portraits and food photography. The 3x telephoto camera with optical image stabilization ensures sharp and high-quality results, even in low-light conditions.
                <br/>
                <h3>Immersive Display</h3>
                Equipped with an E6 AMOLED panel, the ROG Phone 8 Pro features a 6.78-inch display that supports adaptive refresh rates to reduce power consumption. Choose a refresh rate of up to 165Hz for smooth gaming, and the touch sampling rate reaches an impressive 720Hz for instant responsiveness. With peak brightness increased to nearly 2500 nits, you can play or watch movies even in direct sunlight without any issues. Additionally, the display boasts a Delta-E color accuracy rating, ensuring precise color reproduction.
                <br/>
                <h3>Audio Excellence</h3>
                The Dirac Virtuo technology provides immersive sound for all your headphones, whether wired, Bluetooth, or USB-C connected. With the latest AI noise cancellation technology, unwanted background noise is immediately removed during calls, ensuring clear audio. The ROG Phone 8 Pro also supports Qualcomm® aptX™ adaptive and aptX Lossless for high-quality Bluetooth audio.
                <br/>
                <h3>Limitless Power</h3>
                The ROG Phone 8 Pro comes with a massive built-in battery and a 65W HyperCharge USB PD charger included in the box. Additionally, it features 15W wireless charging, providing flexibility and additional charging options. Whether you're into heavy gaming, social media browsing, or streaming movies and series, the ROG Phone 8 Pro is the perfect companion for all types of users.
            </div>
            <div className="datasheet">
                <h2>Technical Specifications</h2>
                <h3>Dimensions and Weight</h3>
                <p>Weight: 225g</p>
                <p>Dimensions: 163.8x76.8x8.9 mm</p>
                <p>IP68</p>
                <h3>Operating System</h3>
                <p>Android 14</p>
                <p>Android™ 14 with ROG UI</p>
                <h3>Processor</h3>
                <p>Qualcomm Snapdragon 8 Gen 3, SM8650, Octa-core CPUs, 3.3GHz</p>
                <p>Qualcomm Adreno 750</p>
                <h3>Memory</h3>
                <p>LPDDR5X 24GB</p>
                <h3>Storage</h3>
                <p>UFS4.0 1TB</p>
                <h3>Display</h3>
                <p>6.78" FHD+ (2400x1080 pixels) AMOLED</p>
                <p>Corning® Gorilla® Glass Victus™2</p>
                <p>107.37% DCI-P3 / 145.65% sRGB / 103.16% NTSC color gamut coverage</p>
                <p>1,600 nits HBM / 2,500 nits peak brightness</p>
                <p>HDR10 supported</p>
                <p>LTPO 1~120Hz, Max to 165Hz</p>
                <p>Supports Always-On display, refresh rate down to 1Hz.</p>
                <p>Capacitive touchscreen with 10-point multitouch (supports glove touch)</p>
                <h3>Rear Camera</h3>
                <ul>
                    <li>Main Rear Camera: Sony® IMX890 50 MP image sensor - 1/1.56” large sensor size, Gimbal OIS, Quad Bayer technology - 12.5 MP, 2 µm large effective pixel size, F1.9 aperture, 23.8mm equivalent focal length in 35mm film camera</li>
                    <li>Second Rear Camera: 13 MP, 120° Ultrawide-angle camera, Free-form lens, 12.7mm equivalent focal length in 35mm film camera</li>
                    <li>Third Rear Camera: 32MP, f/2.4, OIS, 3X optical zoom, pixel binning 1.4μm (Actual output photo: 8MP)</li>
                </ul>
                <h3>Front Camera</h3>
                <p>32MP RGBW, pixel binning 1.4μm (Actual output photo: 8MP)</p>
                <p>22mm equivalent focal length in 35mm film camera</p>
                <h3>Audio</h3>
                <ul>
                    <li>Speaker: 5-magnet receiver; 5-magnet speaker</li>
                    <li>3.5mm headphone jack: supported</li>
                    <li>Audio Output: Hi-Res Audio up to 384 kHz / 32-bit for 3.5mm output</li>
                    <li>AudioWizard with multiple listening profiles</li>
                    <li>Dirac Virtuo for Headphone™ Spatial Sound</li>
                    <li>Microphone: Tri-microphones with ASUS Noise Reduction Technology</li>
                </ul>
                <h3>Video Recording</h3>
                <p>8K UHD (7680 x 4320) video at 24 fps for main rear camera</p>
                <p>4K UHD (3840 x 2160) video at 30 / 60 fps for main rear camera, at 30 fps for second rear camera</p>
                <p>1080p FHD video recording at 30 / 60 fps</p>
                <p>720p HD video recording at 30 / 60 fps</p>
                <p>3-axis electronic image stabilization for rear cameras</p>
                <p>HDR10+ video recording (4K UHD video) for main 50MP and ultra-wide 13MP camera</p>
                <p>Time Lapse (4K UHD video)</p>
                <p>Slow Motion video (4K at 120 fps; 1080p at 240 / 120 fps; 720p at 480 fps)</p>
                <p>Take still photo while recording video</p>
                <h3>Wireless Technology</h3>
                <p>802.11 be/ax/ac/a/b/g/n</p>
                <p>Supports 2.4GHz/ 5GHz/ 6GHz WiFi</p>
                <p>Bluetooth® 5.3 (HFP + A2DP + AVRCP + HID + PAN + OPP), supports Qualcomm® aptX™ Adaptive and aptX™ Lossless</p>
                <p>Wi-Fi Direct</p>
                <p>NFC</p>
                <h3>Navigation</h3>
                <p>BeiDou (B1i/B1c/B2a) and NavIC</p>
                <p>GNSS support GPS(L1/L5), Glonass(L1), Galileo(E1/E5a), BeiDou(B1i/B1c/B2a), QZSS(L1/L5) and NavIC.</p>
                <h3>SIM Card</h3>
                <p>SIM slots: Dual-SIM / Dual-Standby support</p>
                <p>Slot 1: 5G/4G/3G/2G Nano SIM card</p>
                <p>Slot 2: 5G/4G/3G/2G Nano SIM card</p>
                <p>5G services are only supported in 5G network-enabled locations in 5G-ready countries.</p>
                <h3>Network Standard</h3>
                <p>WW version:</p>
                <p>GSM/GPRS/EDGE; CDMA/ WCDMA/HSPA+/DC-HSPA+; FDD-LTE; TD-LTE; 5G Sub 6 SA/NSA</p>
                <p>Support EN-DC/NRCA(6DL+FR1, 2FR1)</p>
                <p>FR1: DL up to 4.92 Gbps / UL 0.9 Gbp</p>
                <p>LTE: DL 7CA Cat20 up to 2.0Gbps / UL 2CA Cat18 up to 211 Mbps</p>
                <p>Gigabit LTE</p>
                <p>DC-HSPA+: DL 42 Mbps / UL 5.76 Mbps</p>
                <p>4x4 MIMO</p>
                <p>5G SA&NSA: n1 / n2 / n3 / n5 / n7 / n8 / n12 / n18 / n20 / n25 / n26 / n28 / n38 / n40 / n41 / n48 / n66 / n77 / n78 / n79</p>
                <p>4G FDD-LTE: B1 / B2 / B3 / B4 / B5 / B7 / B8 / B12 / B17 / B18 / B19 / B20 / B25 / B26 / B28 / B32 / B66</p>
                <p>4G TDD-LTE: B34 / B38 / B39 / B40 / B41 / B42 / B43 / B48</p>
                <p>WCDMA: 850 / 900 / 1700 / 1800 / 1900 / 2100MHz</p>
                <p>GSM: 850 / 900 / 1800 / 1900MHz</p>
                <h3>Sensors</h3>
                <p>In-display fingerprint sensor, face recognition, accelerometer, e-compass, gyroscope, proximity sensor, ambient-light sensor, AirTrigger</p>
                <h3>Battery</h3>
                <p>Equivalent 5,500 mAh (typical) high-capacity battery, supports Quick Charge 5.0 and PD Charging</p>
                <h3>Power</h3>
                <p>USB power adapter (65W)</p>
                <p>USB power adapter (65-Watt): Output: 3.3V-21V 3.25A, supports QC 5.0 / PD 3.0.</p>
                <h3>Contents</h3>
                <p>USB power adapter (65W)</p>
                <p>AeroActive Cooler X</p>
                <p>Aero Case</p>
                <p>USB-C® to USB-C® cable (120 cm)</p>
                <p>Ejector pin (SIM tray needle)</p>
                <p>Documentation (user guide, warranty card)</p>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 6,479 </div>
                ₪
            </Button>
        </div>
    );
}

export default Phone3;