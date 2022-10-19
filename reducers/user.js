import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'email',
  initialState: {
    value: { email: null },
  },
  reducers: {
    updateUserEmail: (state, action) => {
      state.value.email = action.payload;
    },
  },
});

export const { updateUserEmail } = user.actions;
export const selectUser = (state) => state.user.value;
export default user.reducer;
