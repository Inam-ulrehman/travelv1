import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../feature/cart/cartSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { travelCart } = useSelector((state) => state.travelCart)
  const { serverUser } = useSelector((state) => state.user)
  const { available, image, info, name, price } = travelCart

  // const handleRemove
  const handleRemoveButton = () => {
    dispatch(openModal())
  }

  // const handleBook
  const handleBookButton = () => {
    if (serverUser.length === 0) {
      toast.info('Please Loge In first to book your trip...', {
        position: 'top-center',
      })
      dispatch(navigate('/login'))
      return
    }
    return dispatch(navigate('/profile'))
  }
  if (travelCart.length === 0) {
    return (
      <div>
        <h3 className='title'>your cart is empty...</h3>
        <div className='btn-container'>
          <Link to='/travel' className='btn'>
            back to booking
          </Link>
        </div>
      </div>
    )
  }
  return (
    <Wrapper>
      <section>
        <div className='container'>
          <h3 className='title'>Your Shopping Cart</h3>
          <div className='title-underline'></div>
          <div className='cart-container'>
            <h5 className='title'>{name}</h5>
            <div className='cart-holder'>
              <div className='img-container'>
                <img className='img' src={image} alt='' />
              </div>
              <div className='cart-body'>
                <div className='box1'>
                  <p>{available ? 'Trip available' : ''}</p>
                  <p>{price}</p>
                </div>
                <div className='box2'>
                  <button
                    onClick={handleRemoveButton}
                    className='btn'
                    type='button'
                  >
                    remove
                  </button>
                  <button onClick={handleBookButton} className='btn'>
                    book
                  </button>
                </div>
              </div>
              <hr />
              <h4 className='title'>Description</h4>
              <p>{info}</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  .cart-holder {
    max-width: 300px;
    height: 300px;
    margin: 0 auto;
    @media (min-width: 768px) {
      max-width: 768px;
      height: 768px;
    }
  }
  .img-container {
    max-width: 300px;
    max-height: 300px;
    margin: 0 auto;
    @media (min-width: 768px) {
      min-width: 600px;
      max-height: 600px;
    }
  }
  .box1,
  .box2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 768px) {
      max-width: 600px;
      margin: 0 auto;
    }
  }
`
export default Cart
