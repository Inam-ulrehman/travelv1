import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { handleTravelAgency } from './feature/TravelAgency/travelAgencySlice'
import {
  Cart,
  Error,
  Home,
  Login,
  Profile,
  ProtectedRoute,
  SharedLayout,
  TravelAgency,
} from './pages'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleTravelAgency())
    // eslint-disable-next-line
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<Error />} />
          <Route path='travel' element={<TravelAgency />} />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
