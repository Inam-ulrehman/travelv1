import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import FormRow from '../components/FormRow'
import { getUpdateUserValue, updateUserThunk } from '../feature/user/userSlice'
import { toast } from 'react-toastify'
const Profile = () => {
  const dispatch = useDispatch()
  const { travelCart, user } = useSelector((state) => state)
  const { travelCart: item } = travelCart
  const { serverUser } = user

  // handleSubmit
  const handleSubmit = (e) => {
    const { name, lastName, location, email, token } = serverUser
    e.preventDefault()
    if (!name || !lastName || !location || !email) {
      return toast.error('please fill in all fields...')
    }
    return dispatch(updateUserThunk({ name, lastName, location, email, token }))
  }
  // handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getUpdateUserValue({ name, value }))
  }

  return (
    <Wrapper>
      <div className='container'>
        <h3 className='title'>You are almost there...</h3>

        <div style={{ marginBottom: '2rem' }} className='title-underline'></div>
        <h5 className='title'>{item.name}</h5>
        <div className='order-container'>
          <div className='img-container'>
            <img className='img' src={item.image} alt='' />
          </div>
          <div className='order-body'>
            <p>
              please check your details below once you place your order a team
              member will call you .....
            </p>
            <p>your estimated Total : {item.price} $</p>
          </div>
        </div>
      </div>
      <hr />
      <div className='user'>
        <form className='form' onSubmit={handleSubmit}>
          {/* Name input */}
          <FormRow
            name='name'
            type='text'
            id='name'
            value={serverUser.name}
            handleChange={handleChange}
          />
          {/* lastName input */}
          <FormRow
            name='lastName'
            labelText='Last Name'
            type='text'
            id='name'
            value={serverUser.lastName}
            handleChange={handleChange}
          />
          {/* email input */}
          <FormRow
            name='email'
            id='email'
            type='email'
            value={serverUser.email}
            handleChange={handleChange}
          />
          {/* location input */}
          <FormRow
            name='location'
            labelText='Location'
            id='location'
            value={serverUser.location}
            handleChange={handleChange}
          />
          <div className='btn-container'>
            <button className='btn btn-block'>Submit your order</button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .order-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    justify-content: start;
    max-width: 680px;
    margin: 0 auto;
  }
  .img-container {
    height: 150px;
    width: 150px;
  }
`
export default Profile
