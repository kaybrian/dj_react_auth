import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'config';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  registered: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    restRegistered: state => {
      state.registered = false;
    }
  }
});

export const { restRegistered } = userSlice.actions;
export default userSlice.reducer;

const register = createAsyncThunk(
  'users/register/',
  async ({ first_name, last_name, email, password }, thunkAPI) => {

    const body = JSON.stringify({
        first_name,
        last_name,
        email,
        password
    })
    try{
        const res = await fetch(`${API_URL}/api/users/register`,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body
        })

        if (res.status === 201){
            return data;
        }else{
            return thunkAPI.rejectWithValue(data);
        }
    } catch (err){
        return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
