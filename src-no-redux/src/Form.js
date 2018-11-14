import React from 'react'
import {StoreContext} from './context'
import Button from '../../shared/Button'

import {
  change,
  magic,
  minus,
  plus,
} from '../../shared/actions'


const Form = () => (
  <StoreContext.Consumer>
    {({state, dispatch}) => {
      const {counter} = state

      return <form className='form'>
        <label>
          <span className='form-header'>You shall see your future! I hope...</span>
          <input 
            onChange={e => dispatch(change(e))} 
            value={counter}
            type='number' />
        </label>

        <div className='form-controls'>
          <Button
            onClick={() => dispatch(minus())}
            text='Subtract 1'
            type='minus' />
          
          <Button
            onClick={() => dispatch(magic())}
            text='Random number'
            type='magic' />

          <Button
            onClick={() => dispatch(plus())}
            text='Add 1'
            type='plus' />
        </div>
      </form>
    }}
  </StoreContext.Consumer>
)

export default Form