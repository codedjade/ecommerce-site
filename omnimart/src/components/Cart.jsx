// src/components/CartPage.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCart, removeFromCart } from '../features/cartSlice'; // Import removeFromCart
import { purchaseProduct } from '../features/productSlice'; // Import purchase action

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, product) => {
    const productPrice = typeof product.price === 'number' ? product.price : 0; // Ensure price is a number
    return total + productPrice * product.quantity; // Calculate total
  }, 0);

  const handleCheckout = () => {
    cartItems.forEach(product => {
      // Dispatch action to purchase product and reduce stock
      dispatch(purchaseProduct({ id: product.id, quantity: product.quantity }));
    });
    // Dispatch checkout action to clear the cart
    dispatch(checkoutCart());
    alert('Checkout successful!'); // Show confirmation
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); // Dispatch removeFromCart action
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-white">Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-lg p-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b py-3">
                <span className="font-semibold text-black">{item.name}</span>
                <span className="text-gray-700">
                  Price: ${typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A'}
                </span>
                <span className="text-gray-700">Qty: {item.quantity}</span>
                <button 
                  onClick={() => handleRemoveFromCart(item.id)} 
                  className="bg-red-700 text-white hover:bg-red-500 ml-4 py-1 px-3 rounded">
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-4">
              <span className="text-black">Total:</span>
              <span className="text-black">${totalPrice.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout} 
              className="checkout-btn bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-lg mt-6 w-full hover:shadow-lg transition duration-300">
              Finalize Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
