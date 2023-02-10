import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const register = createAsyncThunk(
  'users/register',
  async ({ first_name, last_name, email, password }, thunkAPI) => {

    const body = JSON.stringify({
      first_name,
      last_name,
      email,
      password
    })
    try {
      const res = await fetch(`/api/users/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body
      })

      const data = await res.json();

      if (res.status === 201) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
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
  },
  extraReducers: builder => {
    builder.addCase(register.pending, (state, action) => {
      return (
        state.loading = true
      )
    })
    .addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.registered = true;
    })
    .addCase(register.rejected, (state, action) => {
      state.loading = false;

    })
  }
});

export const { restRegistered } = userSlice.actions;
export default userSlice.reducer;

