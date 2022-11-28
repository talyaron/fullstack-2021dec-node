import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GuideByFilter } from './GuideByFilter'
import { Navbar } from './Navbar'
import { RenderAllGuides } from './RenderAllGuides'

export const FindGuides = () => {
  return (
    <div>
      <h1>find guides</h1>
      <Navbar/>
      {/* OUTLET */}
      <Routes>
        <Route path='all-Guides' element={<RenderAllGuides/>}/>
        <Route path='guide-by-filter' element={<GuideByFilter/>}/>
      </Routes>
    </div>
  )
}
