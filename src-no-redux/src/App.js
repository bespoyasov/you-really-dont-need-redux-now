import React, {Component, useReducer} from 'react'
import {reducer, initialState} from './store'
import {StoreContext} from './context'

import Display from './Display'
import Form from './Form'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{dispatch, state}}>
      <h1>Magic counter!</h1>
      <Form />
      <Display />
    </StoreContext.Provider>
  )
}

export default App