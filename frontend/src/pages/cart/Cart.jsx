import React, { useState } from 'react';
import './Cart.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Oreo Biscuits', quantity: 1, price: 10, amount: "50 g", image: '/Images/productcard/1.jpg' },
    { id: 2, name: 'Lays Chips', quantity: 2, price: 20, amount: "100 g", image: '/Images/productcard/2.jpg' },
    { id: 3, name: 'Coca-Cola', quantity: 1, price: 40, amount: "1 L", image: '/Images/productcard/3.jpg' },
    { id: 4, name: 'Dairy Milk Chocolate', quantity: 3, price: 50, amount: "100 g", image: '/Images/productcard/4.jpg' },
    { id: 5, name: 'Dairy Milk Chocolate', quantity: 3, price: 50, amount: "100 g", image: '/Images/productcard/4.jpg' },
    { id: 6, name: 'Dairy Milk Chocolate', quantity: 3, price: 50, amount: "100 g", image: '/Images/productcard/4.jpg' },
    { id: 7, name: 'Dairy Milk Chocolate', quantity: 3, price: 50, amount: "100 g", image: '/Images/productcard/4.jpg' }
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter(item => item.quantity > 0) // Removes item if quantity is 0
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Navbar />
      <div id="cart-page">
        <div className="products-container">
            <h2>My Cart</h2>
            {cartItems.length === 0 ? (
            <div className="empty-cart">
                <p>Your cart is empty</p>
                <button onClick={() => window.location.href = '/shop'}>Continue Shopping</button>
            </div>
            ) : (
            <div id="cart-items">
                {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                    <div className="price-details">
                        <h3>{item.name}</h3>
                        <h4>{item.amount}</h4>
                        <p>₹{item.price}</p>
                    </div>
                    <div className="quantity-controls-container">
                        <div className="quantity-controls">
                        <button className="qbtn-minus" onClick={() => updateQuantity(item.id, -1)} >-</button>
                        <span>{item.quantity}</span>
                        <button className="qbtn-plus" onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
                
            </div>
            )}
        </div>

        <div className="price-container">
            <h3>Bill Details</h3>
            <div className="bill-details">
                <div className="item-total">
                    <h4><svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-sliders"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 12h8"/><path d="M10 11v2"/><path d="M8 17h8"/><path d="M14 16v2"/></svg> Items Total</h4>
                    <h3>₹{getTotalPrice()}</h3>
                </div>
                <div className="delivery-charge">
                    <h4><svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bike"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg> Delivery Charge</h4>
                    <h3>₹0</h3>
                </div>
                <div className="handling-charge">
                    <h4><svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bag-hand"><path d="M8 8c0-2.8 1.8-5 4-5s4 2.2 4 5"/><path d="m21 18.6-2-9.8c-.1-.5-.5-.8-1-.8H6c-.5 0-.9.3-1 .8l-2 9.8v.4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z"/><path d="M12 12v4"/><path d="M18 8A6 6 0 0 1 6 8"/></svg> Handling Charge</h4>
                    <h3>₹0</h3>
                </div>
                <div className="total-amount">
                    <h4>Total Amount</h4>
                    <h3>₹{getTotalPrice()}</h3>
                </div>
            </div>
            <div className="cancellation-policy-container">
                <h3>Cancellation Policy</h3>
                <p>You can cancel your order anytime before it is packed for shipping. Once the order is packed, you will not be able to cancel it.</p>
            </div>
            <div className="checkout-button-container">
                <button id="checkout-button">Proceed to Checkout &nbsp; &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></button>
            </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default Cart;