import { configureStore } from '@reduxjs/toolkit'
import TravelAgencySlice from './feature/TravelAgency/travelAgencySlice'

const store = configureStore({
  reducer: {
    travelAgency: TravelAgencySlice,
  },
})

export default store
