import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import TravelAgencyComponent from '../components/TravelAgencyComponent'

const TravelAgency = () => {
  const { list, isLoading, readMoreAction } = useSelector((state) => {
    return state.travelAgency
  })
  if (isLoading) {
    return (
      <div>
        <h1 className='title'>Loading....</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <Wrapper>
      <div className='container-box'>
        {list.map((item) => {
          const tempItem = { ...item, available: true }

          return <TravelAgencyComponent key={item.id} {...tempItem} />
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section``
export default TravelAgency
