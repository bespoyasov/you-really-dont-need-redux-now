import {normalizeAmount} from './utils'
import {initialState} from './initialState'

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'PLUS':
      return {
        ...state, 
        counter: normalizeAmount(state.counter + 1)
      }
    
    case 'MINUS':
      return {
        ...state, 
        counter: normalizeAmount(state.counter - 1)
      }

    case 'MAGIC':
      return {
        ...state,
        counter: Math.floor(Math.random() * 100)
      }

    case 'CHANGE':
      return {
        ...state, 
        counter: normalizeAmount(+action.value)
      }

    case 'RESET':
      return {
        ...initialState
      }

    default:
      return state
  }
}