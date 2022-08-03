import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: false,
  msg: '',
  user: JSON.parse(localStorage.getItem('user')),
}

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    return axios
      .post('/api/accounts/register/', user)
      .then((res1) => {
        return axios
          .post('/api/accounts/token/', {
            username: user.username,
            password: user.password,
          })
          .then((res2) => {
            const _user = {
              username: res1.data.username,
              email: res1.data.email,
              token: {
                refresh: res2.data.refresh,
                access: res2.data.access,
              },
            }

            localStorage.setItem('user', JSON.stringify(_user))
            return { message: 'User registered', data: _user }
          })
          .catch((err) => {
            console.log(err)
            return thunkAPI.rejectWithValue({
              error: 400,
              message: 'some error',
            })
          })
      })
      .catch((err) => {
        return thunkAPI.rejectWithValue({
          error: err.response.status,
          message: err.response.data,
        })
      })
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.error = false
      state.msg = ''
      state.user = JSON.parse(localStorage.getItem('user'))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true
        state.msg = ''
        state.error = false
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false
        state.msg = action.payload.message
        state.error = false
        state.user = action.payload.data
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.error
        state.msg = action.payload.message
        state.user = null
      })
  },
})

export const { reset } = authSlice.actions

export default authSlice.reducer
