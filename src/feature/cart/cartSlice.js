import { createSlice } from '@reduxjs/toolkit'
import {
  getTravelCartFromLocalStorage,
  removeTravelCartFromLocalStorage,
  setTravelCartInLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  travelCart: getTravelCartFromLocalStorage() || [],
  isModalOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getTravelCartId: (state, { payload }) => {
      state.travelCart = payload
      setTravelCartInLocalStorage(state.travelCart)
    },
    openModal: (state) => {
      state.isModalOpen = !state.isModalOpen
    },
    emptyTravelCart: (state) => {
      removeTravelCartFromLocalStorage()
      state.travelCart = []
    },
  },
})

export const { getTravelCartId, openModal, emptyTravelCart } = cartSlice.actions
export default cartSlice.reducer
