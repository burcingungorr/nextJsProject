import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  name: "",
  surname: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { uid, name, surname, email } = action.payload;
      state.uid = uid;
      state.name = name;
      state.surname = surname;
      state.email = email;
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
