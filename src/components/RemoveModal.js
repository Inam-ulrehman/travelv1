import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { emptyTravelCart, openModal } from '../feature/cart/cartSlice'

const RemoveModal = () => {
  const dispatch = useDispatch()
  // handleYes
  const handleYes = () => {
    dispatch(emptyTravelCart())
    dispatch(openModal())
  }
  // handleNo
  const handleNo = () => {
    dispatch(openModal())
  }
  return (
    <Wrapper className='modal-container'>
      <div className='modal'>
        <p className='title'>Are you sure you want to empty your cart ?</p>
        <div className='btn-container'>
          <button
            onClick={handleYes}
            type='button '
            className='btn alert-danger'
          >
            yes
          </button>
          <button
            onClick={handleNo}
            type='button'
            className='btn alert-success'
          >
            no
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .btn-container {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }
`

export default RemoveModal
