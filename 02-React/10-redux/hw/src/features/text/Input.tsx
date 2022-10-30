import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { changeText } from './textSlice';

const Input = () => {
   const dispatch = useAppDispatch();
    function handleChangeText(e: React.FocusEvent<HTMLFormElement>|any) {
      dispatch(changeText(e.target.value))
    }

  return (
    <div>
      <input className="input" onChange={handleChangeText} />
    </div>
  )
}

export default Input
