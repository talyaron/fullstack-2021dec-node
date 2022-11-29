import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectedAllGuides, selectedAllStatus } from '../../guides/allGuidesSlice'
import { allGuidesAsync } from '../../guides/guideAPI';
import { GuidesCard } from './GuidesCard';

export const RenderAllGuides = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(allGuidesAsync())
  },[])
  const allGuides = useAppSelector(selectedAllGuides);
  console.log(allGuides);
  const status = useAppSelector(selectedAllStatus);
  return (
    <div>
      <h1 className='headLine'>all the guides</h1>
      <div className='cardAll'>
        { allGuides.map((guide) => {
          return(
            
                  <GuidesCard fullName={guide.fullName}
                              country={guide.country}
                              city={guide.city}
                              telephon={guide.telephon}
                              email={guide.email}
                              image={guide.image}/>
           
          )
        })}
      </div>
    </div>
  )
}
