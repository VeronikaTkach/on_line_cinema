import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { User } from '../types/types';

const initialState: User = {
  id: 0,
  login: '',
  email: '',
  phone: '',
  isLoading: true
}
export const getUserInfo = createAsyncThunk(
	"user/getUserInfo",
	async (param, thunkApi) => {
		try {
			const res = await axios.get(`http://31.129.49.59/api/user/by_email/${param}`);
      console.log('RESULT', res)
			return res.data;
		} catch (err) {
			console.log(err);
			return thunkApi.rejectWithValue(err);
		}
	}
);
const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    })
  }
});

export default UserSlice.reducer;