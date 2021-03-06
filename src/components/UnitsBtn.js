import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CELSIUS, FAHRENHEIT } from '../constants';
import { setUnits } from '.././store/actions/units';
import { SET_FAHRENHEIT, SET_CELSIUS } from '.././store/actions/actionTypes';

function UnitsBtn() {
  const dispatch = useDispatch();
  const units = useSelector((state) => state.units);

  const ToggleUnits = () => {
    dispatch(setUnits(units === CELSIUS ? SET_FAHRENHEIT : SET_CELSIUS));
  };

  return (
      <div onClick={ToggleUnits} className='bg-inherit cursor-pointer'>
        <span className={units === FAHRENHEIT ? 'text-muted' : 'color-inherit'}>°C</span>
        <span className='text-muted'> / </span>
        <span className={units === CELSIUS ? 'text-muted' : 'color-inherit'}>°F</span>
      </div>
  );
}

export default UnitsBtn;
