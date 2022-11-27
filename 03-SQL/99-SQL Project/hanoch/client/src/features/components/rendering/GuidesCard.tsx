import React from 'react'
import { GuideDetails } from '../../guides/guideSlice'

export const GuidesCard = ({fullName, country, city, telephon, email, image}: GuideDetails) => {
  return (
    <div>
        <h1>{fullName}</h1>
        <h3>{country}</h3>
        <h3>{city}</h3>
        <h3>{telephon}</h3>
        <h3>{email}</h3>
        <img src={image} alt="guideImg" />
    </div>
  )
}
