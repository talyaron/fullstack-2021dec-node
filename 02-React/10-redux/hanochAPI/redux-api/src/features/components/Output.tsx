import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { jokeSelector, statusJokeSelector } from '../joke/jokeSlice';
import { Spinner } from '../spinner/Spinner';


export const Output = () => {
    const status = useAppSelector(statusJokeSelector)
    const joke = useAppSelector(jokeSelector)
  return (
    <div>{status === 'loading'? <Spinner/>: <h1>{joke}</h1> }</div>
  )
}
