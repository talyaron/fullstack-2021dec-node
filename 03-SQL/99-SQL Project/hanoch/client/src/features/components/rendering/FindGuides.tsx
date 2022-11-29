import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GuideByFilter } from './GuideByFilter'
import { Navbar } from './Navbar'
import { RenderAllGuides } from './RenderAllGuides';
import '../../../style/findGuide.scss'

export const FindGuides = () => {
  return (
    <div className='findMain'>
      <h1 className='headLine'>find guides</h1>
      <Navbar/>
      {/* OUTLET */}
      <Routes>
        <Route path='all-Guides' element={<RenderAllGuides/>}/>
        <Route path='guide-by-filter' element={<GuideByFilter/>}/>
      </Routes>
    </div>
  )
}
