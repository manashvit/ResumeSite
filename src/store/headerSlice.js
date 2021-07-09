import { createSlice } from '@reduxjs/toolkit'

const scrollDiv = (activeLink, state) => {
  let elm = document.getElementsByClassName(activeLink)[0];
  elm.scrollTop = 0;
  elm.scrollIntoView({ behavior: 'smooth' })
  state.links.forEach((item) => {
    item.active = item.linkDiv === activeLink
  })
}

const headerSlice = createSlice({
  name: 'headerLinks',
  initialState: {
    links: [
      { title: 'Home', linkDiv: 'homeDiv', active: true },
      { title: 'About Me', linkDiv: 'aboutDiv' },
      { title: 'Skills', linkDiv: 'skillsDiv' },
      { title: 'Qualifications', linkDiv: 'qualDiv' },
      { title: 'Portfolio', linkDiv: 'workDiv' },
      { title: 'Contact', linkDiv: 'contactDiv' }
    ]
  },
  reducers: {
    makeActive: (state, action) => {
      scrollDiv(action.payload || 'homeDiv', state)
    },
    goUpSection: (state, action) => {
      let upIndex = (state.links.findIndex(link => link.active)) - 1,
        activeLink = state.links[upIndex].linkDiv;
      scrollDiv(activeLink || 'homeDiv', state)
    }
  }
})

export const { makeActive ,goUpSection} = headerSlice.actions

export default headerSlice.reducer