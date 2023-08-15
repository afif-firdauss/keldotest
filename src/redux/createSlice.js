import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null, // Initial user data state
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload; // Update user data
    },
    clearUser: state => {
      state.userInfo = null; // Clear user data
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;