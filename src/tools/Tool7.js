import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import pic7 from "../pictures/tools/pic7.png";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Tool7({ setCartItems }) {

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
            <h1 ref={nameRef}>Kapro 883G Green 360° Laser Level Set</h1>
            <img ref={picRef} src={pic7} alt="tool7" />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description"> High-quality and professional laser level from Kapro.
                3 prominent green lines in 360° for optimal visibility.
                The laser level can be used for entire room setups and is perfect for both horizontal and vertical leveling simultaneously thanks to the three lines.
                3 360° laser beams: 1 horizontal, 1 side vertical, 1 front vertical.
                The laser level features a laser lock mode for angle marking, manual mode for slope marking, and visual "out-of-level" warning.
                Self-leveling up to 3°.
                Device with "1/4 and "5/8 threading for connection to a tripod for maximum convenience during work.
                The set includes a sturdy carrying case, a versatile hanger with a magnetic holder, a laser target, green Beamfinder glasses, a charger, and a lithium-ion battery</div>
            <h2>Datasheet</h2>
            <div className="datasheet">
                <ul>
                    <li>Applications</li>
                    <ul>
                        <li>Precise alignment of right angles for flooring, gypsum wall installation, and wooden deck construction.</li>
                        <li>Slope setting (in manual mode).</li>
                        <li>Suspending acoustic ceilings.</li>
                        <li>Installing windows and doors.</li>
                    </ul>
                    <li>Accuracy: 0.2 mm/m</li>
                    <li>Laser projection: 3x360°</li>
                    <li>Laser range indoors: 30 meters</li>
                    <li>Laser range outdoors: 70 meters</li>
                    <li>Self-leveling: ± 3°</li>
                    <li>Laser color: Green</li>
                    <li>Tripod attachment: "1/4, "5/8</li>
                    <li>Contents</li>
                    <ul>
                        <li>Hard carrying case.</li>
                        <li>Versatile hanger with magnetic holder.</li>
                        <li>Laser target.</li>
                        <li>Green Beamfinder glasses.</li>
                        <li>Charger.</li>
                        <li>Lithium-ion battery.</li>
                    </ul>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 1,349 </div>
                ₪
            </Button>
        </div>
    );
}

export default Tool7;