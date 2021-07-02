import { createSlice } from '@reduxjs/toolkit'

const headerSlice = createSlice({
  name: 'headerLinks',
  initialState: {
    links: [
      { title: 'Home', linkDiv: 'homeDiv',active:true },
      { title: 'About Me', linkDiv: 'aboutDiv' },
      { title: 'Skills', linkDiv: 'skillsDiv' },
      { title: 'Qualifications', linkDiv: 'qualDiv' },
      { title: 'Portfolio', linkDiv: 'workDiv' },
      { title: 'Contact', linkDiv: 'contactDiv' }
    ]
  },
  reducers: {
    makeActive: (state, action) => {
      let divs = [...document.getElementsByClassName("mainDiv")[0].children],
        activeLink = action.payload?action.payload:'homeDiv',
        elm = document.getElementsByClassName(activeLink)[0];

      divs.forEach((div) => {
        if (div.className.indexOf('awayDiv') === -1)
          div.className += ' awayDiv'
      })
      elm.scrollIntoView({ behavior: 'smooth' })
      elm.className = activeLink;

      state.links.forEach((item)=>{
        item.active=item.linkDiv===activeLink
      })
    }
  }
})

export const { makeActive } = headerSlice.actions

export default headerSlice.reducer