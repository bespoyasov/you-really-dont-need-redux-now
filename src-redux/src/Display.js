import React from 'react'
import {connect} from 'react-redux'
import {reset} from '../../shared/actions'

const Display = ({reset, app}) => {
  const {counter} = app

  return <footer>
    <p>Another component knows that counter equals to {counter} as well!</p>
    
    <p>
      It even can 
      <button onClick={reset}>reset the coutner</button>
    </p>
  </footer>
}

export default connect(
  state => ({ app: state.app }),
  { reset }
)(Display)