import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from '@mui/material/Button';
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import CartItem from "./CartItem";
import Cookies from 'js-cookie';
import './Cart.css';


function Cart({ cartIconCreate, cartItems, setCartItems, ...props }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function removeProductFunc(itemToRemove)
    {
        const updatedCartItems = cartItems.filter(item => item !== itemToRemove);
        setCartItems(updatedCartItems);
        Cookies.set('cartItems', JSON.stringify(updatedCartItems));
    }


    // Calculate total sum of prices
    let totalSum = 0;
    cartItems.forEach(item => {
        // Remove commas and cast to integer
        const price = parseInt(item.price.replace(/,/g, ''), 10);
        totalSum += price * item.amount;
    });

    // Change an integer to string and put , in the right places
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className='cartIcon'>
            {cartIconCreate && <MdOutlineLocalGroceryStore style={{ cursor: 'pointer' }} onClick={handleShow} />}
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <CartItem key={index} item={item} removeProductFunc={removeProductFunc} cartItems={cartItems} setCartItems={setCartItems}/>
                        ))
                    ) : (
                        <div className='noItems'>No items in the cart</div>
                    )}
                    <div className='totalPrice'>Total Price: {numberWithCommas(totalSum)}₪</div>
                    <div style={{ textAlign: 'center' }}>
                        <Button className="payment" variant="contained" size="large" style={{ bottom: '20px' }}>
                            Checkout
                        </Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Cart;