import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customFetchTravelAgency } from '../../utils/axios'
import { toast } from 'react-toastify'
const initialState = {
  isLoading: true,
  list: [],
}

// Axios .Get === TravelAgency Api ====
export const handleTravelAgency = createAsyncThunk(
  'travelAgency/handleTravelAgency',
  async (_, thunkAPI) => {
    try {
      const resp = await customFetchTravelAgency.get()
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const travelAgencySlice = createSlice({
  name: 'travelAgency',
  initialState,

  extraReducers: {
    [handleTravelAgency.pending]: (state) => {
      state.isLoading = true
    },
    [handleTravelAgency.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.list = payload
    },
    [handleTravelAgency.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export default travelAgencySlice.reducer
