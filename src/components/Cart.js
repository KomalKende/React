import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.itemcart)
    // console.log(cartItems)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

  return (
    <div className='p-4'>
      <h1 className='text-2xl text-center font-bold my-4 text-orange-500'>Cart</h1>
      <div className='w-6/12 p-4 shadow-lg border-1 border border-gray-200 border-solid rounded-lg m-auto' >
      <button className='p-2 my-2 bg-orange-500 rounded-lg text-white font-bold' onClick={handleClearCart}>Clear Cart</button>
    {
        cartItems.length === 0 && <h1 className='my-2 font-medium'>Cart is empty. Please add items in the Cart!!</h1>
    }
    <ItemList item={cartItems} />
      </div>
    </div>
  )
}

export default Cart
