import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNaveBar from '../components/MobileNaveBar'
import NavBar from '../components/NavBar'

const SharedLayout = () => {
  return (
    <main>
      <section className='section'>
        <MobileNaveBar />
        <NavBar />
        <Outlet />
      </section>
    </main>
  )
}

export default SharedLayout
