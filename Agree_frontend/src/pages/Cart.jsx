import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemcart } from "../state/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartproduct.cartItem);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeItemcart(productId));
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">My Cart</h1>
      {cartItems.length === 0 ? (
        <div className="h-[55vh] w-full">
          <p>Your cart is empty.</p>
        </div>
      ) : cartItems.length == 1 ? (
        <div className="h-[55vh] w-full">
          <ul>
          {cartItems.map((item) => (
            <div key={item.id} className="border rounded border-gray-300 py-8 flex items-center justify-between mb-[2%]">
              <div className="flex h-[100%] w-[100%] justify-between items-center space-x-[%] mx-[2%]">
                <div className="h-[100%] w-[30%%]">
                  <img className="rounded-md h-[17vh] w-[19vh]" src={item.image} alt={item.name} />
                </div>
                <div className="flex h-[100%] w-[70%] justify-center items-center">
                  <div>
                    <div className="h-aut0 w-[50%%]">
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-gray-600">Price: ${item.price}</div>
                    </div>
                    <div className="h-[16%] w-[16%%]">
                      <button onClick={() => handleRemoveFromCart(item.id)} className="px-[3%] rounded bg-red-100 text-red-500 hover:bg-red-200 hover:text-black">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <div key={item.id} className="border rounded border-gray-300 py-8 flex items-center justify-between mb-[2%]">
              <div className="flex h-[100%] w-[100%] justify-between items-center space-x-[%] mx-[2%]">
                <div className="h-[100%] w-[30%%]">
                  <img className="rounded-md h-[17vh] w-[19vh]" src={item.image} alt={item.name} />
                </div>
                <div className="flex h-[100%] w-[70%] justify-center items-center">
                  <div>
                    <div className="h-aut0 w-[50%%]">
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-gray-600">Price: ${item.price}</div>
                    </div>
                    <div className="h-[16%] w-[16%%]">
                      <button onClick={() => handleRemoveFromCart(item.id)} className="px-[3%] rounded bg-red-100 text-red-500 hover:bg-red-200 hover:text-black">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
