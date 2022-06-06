import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { toast } from 'react-toastify'
import { customFetchUser } from '../../utils/axios'

import {
  getUserFromLocalStorage,
  removeTravelCartFromLocalStorage,
  setUserInLocalStorage,
} from '../../utils/localStorage'

// Axios post == registerUserThunk ==

export const registerUserThunk = createAsyncThunk(
  'user/registerUserThunk',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetchUser.post('/auth/Register', user)
      return resp.data.user
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
// Axios post == loginUserThunk ==

export const loginUserThunk = createAsyncThunk(
  'user/loginUserThunk',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetchUser.post('/auth/login', user)
      return resp.data.user
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

// Axios patch == updateUserThunk ==
export const updateUserThunk = createAsyncThunk(
  'user/updateUserThunk',
  async (user, thunkAPI) => {
    const { name, lastName, location, email, token } = user
    try {
      const resp = await customFetchUser.patch(
        '/auth/updateUser',
        { name, lastName, email, location },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      return resp.data.user.name
    } catch (error) {
      return thunkAPI.rejectWithValue('problem with order')
    }
  }
)

// ===  User Slice ===

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  isLoading: false,
  serverUser: getUserFromLocalStorage() || [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserNameValue: (state, { payload }) => {
      const { name, value } = payload

      state[name] = value
    },
    toggleMember: (state) => {
      state.isMember = !state.isMember
    },
    getUpdateUserValue: (state, { payload }) => {
      const { name, value } = payload
      state.serverUser[name] = value
    },
  },
  extraReducers: {
    [registerUserThunk.pending]: (state) => {
      state.isLoading = true
    },
    [registerUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      toast.success(`hello there ${payload.name}`)
    },
    [registerUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [loginUserThunk.pending]: (state) => {
      state.isLoading = true
    },
    [loginUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      toast.success(`welcome back ${payload.name}`)
      state.serverUser = payload
      setUserInLocalStorage(state.serverUser)
    },
    [loginUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [updateUserThunk.pending]: (state) => {
      state.isLoading = true
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      toast.success(`Thank you for the booking ${payload}`)
      removeTravelCartFromLocalStorage()
    },
    [updateUserThunk.rejected]: (state) => {
      state.isLoading = false
      toast.error('rejected')
    },
  },
})
export const { getUserNameValue, toggleMember, getUpdateUserValue } =
  userSlice.actions
export default userSlice.reducer
