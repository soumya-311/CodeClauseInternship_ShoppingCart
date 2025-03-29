import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(Shopcontext);

  console.log('cartItems:', cartItems);   // Log the cart items
  console.log('products:', products);     // Log the products data

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  if (!products || !cartItems) return <div>Loading...</div>; // Display loading message if data is missing

  console.log('cartData:', cartData);   // Log the final cartData

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={' CART'} />
      </div>
      <div>
        {cartData.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find(product => product._id === item._id);
            if (!productData) {
              console.log(`Product with ID ${item._id} not found`);
              return null; // Skip if product is not found
            }

            console.log('productData:', productData);   // Log product data

            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=>e.target.value==='' || e.target.value==='0'?null: updateQuantity(item._id,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type='number' min={1} defaultValue={item.quantity}/>
                <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin} alt="" />
              </div>
            );
          })
        )}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button className='bg-black text-white text-sm my-8 px-8 py-3'>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
