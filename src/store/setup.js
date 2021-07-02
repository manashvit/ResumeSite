import { configureStore } from '@reduxjs/toolkit'
import headerRed from './headerSlice';
const store = configureStore({
  reducer: {
    headerLinks:headerRed
  },
})

export default store;