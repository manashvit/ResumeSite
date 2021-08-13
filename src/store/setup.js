import { configureStore } from '@reduxjs/toolkit'
import headerRed from './headerSlice';
import skillsRed from './skillsSlice';
import qualRed from './qualSlice';
import workRed from './workSlice';
import contactRed from './contactSlice'
import geekRed from './geekSlice'
const store = configureStore({
  reducer: {
    headerLinks:headerRed,
    skillsData:skillsRed,
    qualData:qualRed,
    workData:workRed,
    contactData:contactRed,
    geekData:geekRed,
  },
})

export default store;