import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import './Cart.css';
import Cookies from "js-cookie";


function CartItem({ item, removeProductFunc, cartItems, setCartItems }) {

    const [amount, setAmount] = React.useState(item.amount);

    function plusAmount() {
        const newAmount = amount + 1;
        setAmount(newAmount);
        updateCartItemAmount(newAmount);
    }

    function minusAmount() {
        if (amount === 1) {
            removeProductFunc(item);
        } else {
            const newAmount = amount - 1;
            setAmount(newAmount);
            updateCartItemAmount(newAmount);
        }
    }

    function updateCartItemAmount(newAmount) {
        const updatedCartItems = cartItems.map(cartItem => {
            if (cartItem.name === item.name) {
                return { ...cartItem, amount: newAmount };
            }
            return cartItem;
        });
        Cookies.set('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    }


    return (
        <Card className="cartItem">
            <Card.Body className="itemContent">
                <div className="picture">
                    <img src={item.pic} alt="item" width='50px' />
                </div>
                <div className="itemName">
                    {item.name}
                </div>
                <div className="productManagement">
                    <FaRegTrashAlt className="removeProduct" onClick={() => removeProductFunc(item)}/>
                    <div className="price">
                        {(parseInt(item.price.replace(/,/g, ''), 10) * amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}₪
                    </div>
                    <div className="amount">
                        <FaMinus className="minus" onClick={minusAmount}/>
                        <div className="number">{amount}</div>
                        <FaPlus className="plus" onClick={plusAmount}/>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CartItem;