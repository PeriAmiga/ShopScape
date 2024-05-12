import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic2 from "../pictures/phones/pic2.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Phone2({ setCartItems }) {

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
            <h1 ref={nameRef}>Apple iPhone 15 Pro Max 256GB - Titanium Black color</h1>
            <img ref={picRef} src={pic2} alt="phone2" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">
                <h3>Elegant Design</h3>
                The Apple iPhone 15 Pro Max 256GB epitomizes elegance with its sleek and refined design. Crafted from premium materials, including stainless steel and glass, it exudes luxury and sophistication. The device's seamless construction and edge-to-edge display create a seamless and immersive user experience. Available in a range of stunning finishes, such as Midnight Black, Silver, and Gold, the iPhone 15 Pro Max 256GB offers timeless style and unparalleled craftsmanship.
                <br/>
                <h3>Performance</h3>
                Experience unmatched performance with the Apple iPhone 15 Pro Max 256GB. Powered by the latest A-series chip and Neural Engine, it delivers lightning-fast speeds and seamless multitasking. Whether you're launching apps, editing videos, or playing graphics-intensive games, the iPhone 15 Pro Max 256GB handles it all with ease. With advanced machine learning capabilities, the device intelligently optimizes performance to suit your needs, ensuring smooth and responsive operation at all times.
                <br/>
                <h3>AI-Powered Innovation</h3>
                Take advantage of AI-powered innovations on the Apple iPhone 15 Pro Max 256GB. From enhanced photography features that capture stunning images in any lighting condition to intelligent voice assistants that simplify your daily tasks, AI enhances every aspect of your smartphone experience. With Apple's commitment to innovation, the iPhone 15 Pro Max 256GB seamlessly integrates AI into its ecosystem, providing personalized and intuitive user experiences that anticipate your needs and enhance your productivity.
                <br/>
                <h3>Display</h3>
                Immerse yourself in a cinematic viewing experience with the Apple iPhone 15 Pro Max 256GB's stunning display. Featuring a Super Retina XDR OLED panel with ProMotion technology, it delivers vibrant colors, deep blacks, and true-to-life detail. Whether you're watching movies, browsing photos, or gaming, the iPhone 15 Pro Max 256GB's immersive display brings content to life with stunning clarity and fluidity. With HDR support and Dolby Vision, every scene is rendered with breathtaking realism, making for an unparalleled visual experience.
                <br/>
                <h3>Camera</h3>
                Capture every moment with precision and clarity using the Apple iPhone 15 Pro Max 256GB's advanced camera system. Equipped with a triple-camera setup, including wide, ultra-wide, and telephoto lenses, it allows you to take professional-quality photos and videos with ease. From stunning landscapes to detailed portraits, the iPhone 15 Pro Max 256GB's intelligent photography features ensure exceptional results in any situation. With Night mode, Deep Fusion, and Smart HDR, you can achieve stunning images with incredible detail and dynamic range, even in low-light conditions.
                <br/>
                <h3>Battery</h3>
                Stay powered up all day long with the Apple iPhone 15 Pro Max 256GB's long-lasting battery life. With optimized power management and fast charging capabilities, it keeps you connected and productive throughout the day. Whether you're streaming videos, browsing the web, or playing games, the iPhone 15 Pro Max 256GB delivers reliable performance and endurance, so you can focus on what matters most without interruption.
                <br/>
                <h3>Security</h3>
                Protect your personal information with advanced security features on the Apple iPhone 15 Pro Max 256GB. With Face ID facial recognition technology and Secure Enclave encryption, your device and data are safeguarded against unauthorized access. Additionally, with iOS's built-in privacy features and regular software updates, you can trust that your information remains secure and your privacy is protected, giving you peace of mind in today's digital world.
            </div>
            <div className="datasheet">
                <h2>Technical Specifications</h2>
                <h3>Finish</h3>
                <ul>
                    <li>Titanium design</li>
                    <li>Ceramic Shield front</li>
                    <li>Textured matte glass back</li>
                </ul>
                <h3>Capacity</h3>
                <p>256GB</p>
                <h3>Size and Weight</h3>
                <p>Dimensions: 79x162.3x8.6 mm</p>
                <p>Weight: 232 grams</p>
                <h3>Display</h3>
                <ul>
                    <li>Super Retina XDR display</li>
                    <li>6.7-inch (diagonal) all-screen OLED display</li>
                    <li>2796-by-1290-pixel resolution at 460 ppi</li>
                    <li>Dynamic Island</li>
                    <li>Always-On display</li>
                    <li>ProMotion technology with adaptive refresh rates up to 120Hz</li>
                    <li>HDR display</li>
                    <li>True Tone</li>
                    <li>Wide color (P3)</li>
                    <li>Haptic Touch</li>
                    <li>2,000,000:1 contrast ratio (typical)</li>
                    <li>1000 nits max brightness (typical); 1600 nits peak brightness (HDR); 2000 nits peak brightness (outdoor)</li>
                    <li>Fingerprint-resistant oleophobic coating</li>
                    <li>Support for display of multiple languages and characters simultaneously</li>
                </ul>
                <h3>Chip</h3>
                <p>A17 Pro chip</p>
                <ul>
                    <li>New 6-core CPU with 2 performance and 4 efficiency cores</li>
                    <li>New 6-core GPU</li>
                    <li>New 16-core Neural Engine</li>
                </ul>
                <h3>Camera</h3>
                <p>iPhone 15 Pro Max</p>
                <p>Pro camera system</p>
                <ul>
                    <li>48MP Main: 24 mm, ƒ/1.78 aperture, second-generation sensor-shift optical image stabilization, 100% Focus Pixels, support for super-high-resolution photos (24MP and 48MP)</li>
                    <li>12MP Ultra Wide: 13 mm, ƒ/2.2 aperture and 120° field of view, 100% Focus Pixels</li>
                    <li>12MP 2x Telephoto (enabled by quad-pixel sensor): 48 mm, ƒ/1.78 aperture, second-generation sensor-shift optical image stabilization, 100% Focus Pixels</li>
                    <li>12MP 5x Telephoto: 120 mm, ƒ/2.8 aperture, 3D sensor-shift optical image stabilization and autofocus, tetraprism design</li>
                    <li>5x optical zoom in, 2x optical zoom out; 10x optical zoom range</li>
                    <li>Digital zoom up to 25x</li>
                    <li>Customizable default lens (Main)</li>
                    <li>Sapphire crystal lens cover</li>
                    <li>Adaptive True Tone flash</li>
                    <li>Photonic Engine</li>
                    <li>Deep Fusion</li>
                    <li>Smart HDR 5</li>
                    <li>Next-generation portraits with Focus and Depth Control</li>
                    <li>Portrait Lighting with six effects</li>
                    <li>Night mode</li>
                    <li>Night mode portraits enabled by LiDAR Scanner</li>
                    <li>Panorama (up to 63MP)</li>
                    <li>Photographic Styles</li>
                    <li>Macro photography</li>
                    <li>Apple ProRAW</li>
                    <li>Wide color capture for photos and Live Photos</li>
                    <li>Lens correction (Ultra Wide)</li>
                    <li>Advanced red-eye correction</li>
                    <li>Auto image stabilization</li>
                    <li>Burst mode</li>
                    <li>Photo geotagging</li>
                    <li>Image formats captured: HEIF, JPEG, and DNG</li>
                </ul>
                <h3>Video Recording</h3>
                <p>Supported formats: HEVC, H.264, and ProRes</p>
                <ul>
                    <li>4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps</li>
                    <li>1080p HD video recording at 25 fps, 30 fps, or 60 fps</li>
                    <li>720p HD video recording at 30 fps</li>
                    <li>Cinematic mode up to 4K HDR at 30 fps</li>
                    <li>Action mode up to 2.8K at 60 fps</li>
                    <li>HDR video recording with Dolby Vision up to 4K at 60 fps</li>
                    <li>ProRes video recording up to 4K at 60 fps with external recording</li>
                    <li>Log video recording</li>
                    <li>Academy Color Encoding System</li>
                    <li>Macro video recording, including slo-mo and time-lapse</li>
                    <li>Slo-mo video support for 1080p at 120 fps or 240 fps</li>
                    <li>Time-lapse video with stabilization</li>
                    <li>Night mode Time-lapse</li>
                    <li>QuickTake video</li>
                    <li>Second-generation sensor-shift optical image stabilization for video (Main)</li>
                    <li>Optical image stabilization for video (3x Telephoto)</li>
                    <li>3D sensor-shift optical image stabilization and autofocus for video (5x Telephoto)</li>
                    <li>Digital zoom up to 9x (iPhone 15 Pro) and 15x (iPhone 15 Pro Max)</li>
                    <li>Audio zoom</li>
                    <li>True Tone flash</li>
                    <li>Cinematic video stabilization (4K, 1080p, and 720p)</li>
                    <li>Continuous autofocus video</li>
                    <li>Take 8MP still photos while recording 4K video</li>
                    <li>Playback zoom</li>
                    <li>Video formats recorded: HEVC, H.264, and ProRes</li>
                    <li>Stereo recording</li>
                </ul>
                <h3>Cellular and Wireless Connectivity</h3>
                <ul>
                    <li>5G</li>
                    <li>LTE</li>
                    <li>Wi-Fi</li>
                    <li>Bluetooth 5.3</li>
                    <li>NFC with reader mode</li>
                    <li>Precision dual-frequency GPS (GPS, GLONASS, Galileo, QZSS, BeiDou, and NavIC)</li>
                    <li>Digital compass</li>
                    <li>Wi-Fi</li>
                    <li>Cellular</li>
                    <li>iBeacon micro-location</li>
                </ul>
                <h3>Video Calls</h3>
                <ul>
                    <li>FaceTime video calling over cellular or Wi-Fi</li>
                    <li>Share experiences like movies, TV, music, and other apps in a FaceTime call with SharePlay</li>
                    <li>Screen sharing</li>
                    <li>Portrait mode in FaceTime video</li>
                    <li>Spatial Audio</li>
                    <li>Voice Isolation and Wide Spectrum microphone modes</li>
                    <li>Optical zoom with rear-facing camera</li>
                </ul>
                <h3>Voice Calls</h3>
                <ul>
                    <li>FaceTime audio</li>
                    <li>Share experiences like movies, TV, music, and other apps in a FaceTime call with SharePlay</li>
                    <li>Screen sharing</li>
                    <li>Spatial Audio</li>
                    <li>Voice Isolation and Wide Spectrum microphone modes</li>
                </ul>
                <h3>Audio Playback</h3>
                <p>Supported formats include AAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus, and Dolby Atmos</p>
                <p>Spatial Audio playback</p>
                <p>User-configurable maximum volume limit</p>
                <h3>Video Playback</h3>
                <p>Supported formats include HEVC, H.264, and ProRes</p>
                <p>HDR with Dolby Vision, HDR10, and HLG</p>
                <p>Up to 4K HDR AirPlay for mirroring, photos, and video out to Apple TV (2nd generation or later) or AirPlay-enabled smart TV</p>
                <h3>External Buttons and Connectors</h3>
                <ul>
                    <li>Volume up/down</li>
                    <li>Action button</li>
                    <li>Side button</li>
                    <li>Built-in stereo speaker</li>
                    <li>Built-in microphone</li>
                    <li>USB-C connector</li>
                </ul>
                <h3>Charging and Expansion</h3>
                <p>USB-C connector with support for:</p>
                <ul>
                    <li>Charging</li>
                    <li>DisplayPort</li>
                    <li>USB 3</li>
                </ul>
                <h3>Battery</h3>
                <p>Built-in rechargeable lithium-ion battery</p>
                <p>MagSafe wireless charging</p>
                <p>Qi wireless charging</p>
                <p>Fast-charge capable</p>
                <h3>Sensors</h3>
                <ul>
                    <li>Face ID</li>
                    <li>LiDAR Scanner</li>
                    <li>Barometer</li>
                    <li>High dynamic range gyro</li>
                    <li>High-g accelerometer</li>
                    <li>Proximity sensor</li>
                    <li>Dual ambient light sensors</li>
                </ul>
                <h3>Supported Operating Systems</h3>
                <p>iOS 17</p>
                <h3>Environmental Requirements</h3>
                <ul>
                    <li>Operating ambient temperature: 32° to 95° F (0° to 35° C)</li>
                    <li>Nonoperating temperature: −4° to 113° F (−20° to 45° C)</li>
                    <li>Relative humidity: 5% to 95% noncondensing</li>
                    <li>Operating altitude: tested up to 10,000 feet (3000 m)</li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 5,989 </div>
                ₪
            </Button>
        </div>
    );
}

export default Phone2;