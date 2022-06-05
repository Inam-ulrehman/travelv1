import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { readMoreAction } from '../feature/TravelAgency/travelAgencySlice'

const TravelAgencyComponent = ({ available, id, image, info, name, price }) => {
  const dispatch = useDispatch()
  const { readMore } = useSelector((state) => state.travelAgency)

  // handleButton
  const handleButton = (e) => {
    dispatch(readMoreAction())
  }

  return (
    <Wrapper>
      <h4 className='title'>{name}</h4>
      <div style={{ marginBottom: '2rem' }} className='title-underline'></div>
      <div className='travel-container'>
        <div className='img-container'>
          <img src={image} alt='' />
        </div>
        <div className='body-container'>
          <div className='travel-price'>
            <p className='available'>
              {available ? 'Available' : 'out of stock'}
            </p>
            <p>Price : {price} CAD</p>
          </div>

          <div className='paragraph-reading'>
            <p>
              {readMore ? info : `${info.substring(0, 100)}`}{' '}
              <button
                className='readButton'
                onClick={handleButton}
                type='button'
              >
                {readMore ? 'Read Less.' : 'Read More...'}
              </button>{' '}
            </p>
          </div>
          <div className='btn-container'>
            <button type='btn' className='btn btn-block'>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 300px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 600px;
  }
  transition: var(--transition);
  box-shadow: var(--shadow-2);
  :hover {
    box-shadow: var(--shadow-4);
    transition: var(--transition);
  }
  .img-container {
    height: 300px;
    width: 300px;
    object-fit: cover;
    margin: 0 auto;
    img {
      height: 300px;
      width: 300px;
      border-top-right-radius: var(--radius);
      border-top-left-radius: var(--radius);
    }
  }
  @media (min-width: 678px) {
    .img-container {
      height: 600px;
      width: 600px;

      img {
        height: 600px;
        width: 600px;
      }
    }
  }
  .travel-price {
    width: 300px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    padding: 0 1rem;
    @media (min-width: 678px) {
      width: 600px;
    }
  }
  .available {
    background: var(--green-light);
    padding: 4px;
    border-radius: var(--radius);
  }
  .paragraph-reading {
    width: 300px;
    margin: 0 auto;
    @media (min-width: 678px) {
      width: 600px;
      text-align: center;
    }
  }
  .btn-container {
    width: 300px;
    margin: 0 auto;
    button {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    @media (min-width: 678px) {
      width: 600px;
      text-align: center;
    }
  }
  .readButton {
    border: transparent;
    color: var(--primary-5);
    background: transparent;
    cursor: pointer;
  }
`
export default TravelAgencyComponent
