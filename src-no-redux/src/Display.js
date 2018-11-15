import React, {useContext} from 'react'
import {StoreContext} from './context'
import {reset} from '../../shared/actions'

const Display = () => {
  const {state, dispatch} = useContext(StoreContext)

  return (
    <footer>
      <p>Another component knows that counter equals to {state.counter} as well!</p>
      
      <p>
        It even can 
        <button 
          onClick={() => dispatch(reset())}>
          reset the coutner</button>
      </p>
    </footer>
  )
}

export default Display