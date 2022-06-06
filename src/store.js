import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './feature/cart/cartSlice'
import TravelAgencySlice from './feature/TravelAgency/travelAgencySlice'
import userSlice from './feature/user/userSlice'

const store = configureStore({
  reducer: {
    travelAgency: TravelAgencySlice,
    travelCart: cartSlice,
    user: userSlice,
  },
})

export default store
