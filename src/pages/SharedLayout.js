import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNaveBar from '../components/MobileNaveBar'
import NavBar from '../components/NavBar'
import RemoveModal from '../components/RemoveModal'
import { useSelector } from 'react-redux'

const SharedLayout = () => {
  const { isModalOpen } = useSelector((state) => {
    return state.travelCart
  })
  return (
    <main>
      <section className='section'>
        {isModalOpen && <RemoveModal />}

        <MobileNaveBar />
        <NavBar />
        <Outlet />
      </section>
    </main>
  )
}

export default SharedLayout
