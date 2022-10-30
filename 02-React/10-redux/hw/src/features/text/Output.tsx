import React from 'react'
import { useAppSelector } from "../../app/hooks";
import { textSelector } from './textSlice';

const Output = () => {
  const text = useAppSelector(textSelector)
  return (
    <p>
      { text.length > 0 ? text : 'Text is here...'}
    </p>
  )
}

export default Output
