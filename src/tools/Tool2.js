import * as React from 'react';
import pic2 from "../pictures/tools/pic2.png";
import tool2 from "../pictures/tools/tool2.mp4";
import '../Product.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import {useRef} from "react";
import Cookies from "js-cookie";


function Tool2({ setCartItems }) {

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
            <h1 ref={nameRef}>Toolbox for Mechanics, 227 Pieces by Makita</h1>
            <img ref={picRef} src={pic2} alt="tool2" />
            <video src={tool2} autoPlay loop muted />
            <Rating
                className="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="description">Supplied in a high-quality toolbox, this set is ideal for the job site or garage, offering easy storage and portability. It includes all the necessary pieces to complete work at a high standard.</div>
            <br/>
            <h2>Datasheet</h2>
            <div className="datasheet">
                <ul>
                    <li>12-COMBINATION WRENCH, CRV, SIZE: 6/8/10/11/12/13/14/15/16/17/18/19 MM</li>
                    <li>8-FOLDING HEX KEY WRENCH, CRV, BLACK OXIDE, SIZE: 1.5 — 8MM</li>
                    <li>1-BIT DRIVER WITH MAGNETIC TIP, CARBON STEEL</li>
                    <li>2-1/4"DR. ( 72T) & 1/2" DR. ( 72T) STREAMLINE RATCHET HANDLE, CRV, MATTE FINISH, PUSH</li>
                    <li>10-NUTDRIVER, 50BV30, SANDBLASTED FINISH, SIZE: 5/5.5/6/7/8/9/10/11/12/13MM</li>
                    <li>13-1/4"DR. SOCKET, CRV, SIZE: 4/4.5/5/5.5/6/7/8/9/10/11/12/13/14MM</li>
                    <li>11-1/2"DR. SOCKET, CRV, SIZE:15/16/17/19/20/21/22/24/27/30/32MM</li>
                    <li>1-1/4"DR. COUPLER, CRV</li>
                    <li>5-1/4"DR. E-SOCKET, CRV, SIZE: E4/5/6/7/8</li>
                    <li>6-3/8"DR. E-SOCKET, CRV, SIZE: E10/11/12/14/16/18</li>
                    <li>3-1/2"DR. E-SOCKET, CRV, SIZE: E20/22/24</li>
                    <li>2-1/2"DR. SPARK PLUG SOCKET, CRV, SIZE: 16/21MM</li>
                    <li>1-1/4"DR. SPINNER HANDLE, CRV</li>
                    <li>2-1/4"DR. EXTENSION BAR, CRV, SIZE: 2" & 4"</li>
                    <li>2-1/2"DR. EXTENSION BAR, CRV, SIZE: 5" & 10"</li>
                    <li>1-1/4"DR. SLIDING T-BAR, CRV</li>
                    <li>1-1/2"M X 3/8"F 3 WAY SOCKET ADAPTER</li>
                    <li>2-1/4"DR. & 1/2" DR. UNIVERSAL JOINT, CRV</li>
                    <li>29-30MM (L) BITS, S2 sandblasted, SIZE: 3-SLOTTED: 6/6.5/8MM ; 8-STAR: T25/27/30/35/40X2/45/50 ; 6-STAR WITH HOLE: T27/30/35/40/45/50 6-PHILLIPS: PH1, PH2, PH3X2, PH4X2 ; 6-POZI: PZ1, PZ2, PZ3X2, PZ4X2</li>
                    <li>1-60MM MAGNETIC HOLDER, 1- 80MM FLEXIBLE MAGNETIC HOLDER</li>
                    <li>1- 120MM CLEAR FLEXIBLE MAGNETIC HOLDER</li>
                    <li>30-25MM (L) BITS, S2, W/PLASTIC BOX, SIZE: 4pc- SL 3, 4, 5, 6 / 4pc- PH 1, 2, 2, 3 / 4pc- PZ 1, 2, 2, 3 / 4pc- HX 3, 4, 5,6 7pc- TH10,15,20,25,27,30,40 / 7pc- THX 10,15,20,25,27,30,40</li>
                    <li>80-25MM (L) BITS, S2, W/BPCS PLASTIC HOLDERS, SIZE: 19-STAR: T8/9/10/15/20*5PCS/25*4PCS/27"4PCS/30/40 ; 9-STAR WITH HOLE: T8/9/10/15/20/25/27/30/40 3-SPANNER: 5/6/8 ; 3-SPLINE: 4/6/8 ; 3-TROQ: 6/8/10 ; 3-TRI-WING: 1/2/3 10-POZI: PZOX2, PZ1X2, PZ2X3, PZ3X3 ; 10-HEX WITH HOLE: H3X2, H4X2, H5X3, H6X3 ; 20-PHILLIPS: PHOX5, PH1X5, PH2X5, PH3X5</li>
                    <li>1-SOCKET ADPATER, 1/2FX3/8M ; 1-COUPLER, CRV, SIZE: 1/2X5/16</li>
                </ul>
            </div>
            <Button className="price" variant="contained" size="large" onClick={handleBuyNowClick}>
                Buy it now for only
                <div ref={costRef} className="cost"> 599 </div>
                ₪
            </Button>
        </div>
    );
}

export default Tool2;