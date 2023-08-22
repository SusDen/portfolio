import {createSlice} from '@reduxjs/toolkit'

export interface AuthState {
  text: string;
}

const initialState: AuthState = {
  text: "Hello World!"
};
export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {}
})

// Action creators are generated for each case reducer function
export const {} = appSlice.actions

export default appSlice.reducer