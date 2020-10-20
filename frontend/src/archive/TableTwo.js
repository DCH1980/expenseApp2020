import React, { Fragment, useState, useEffect, useReducer } from 'react';
import { getEverything } from '../axios/actions';
import { AppReducer } from '../context/AppReducer'

export const TableTwo = () => {
  const [state, setState] = useState(() => {
    const initialState = getEverything();
    return initialState;
  });

  useEffect(() => {
    getEverything()
  }, []);
 
  
  return <div></div>
}


