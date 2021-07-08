import { configureStore } from '@reduxjs/toolkit'
import headerRed from './headerSlice';
import skillsRed from './skillsSlice';
import qualRed from './qualSlice';
const store = configureStore({
  reducer: {
    headerLinks:headerRed,
    skillsData:skillsRed,
    qualData:qualRed
  },
})

export default store;