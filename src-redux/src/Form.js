import React from 'react'
import {connect} from 'react-redux'
import Button from '../../shared/Button'
import * as actions from '../../shared/actions'


const Form = (props) => {
  const {
    app,
    change,
    minus,
    plus,
    magic,
  } = props

  const {counter} = app

  return <form className='form'>
    <label>
      <span className='form-header'>You shall see your future! I hope...</span>
      <input 
        onChange={change}
        value={counter}
        type='number' />
    </label>

    <div className='form-controls'>
      <Button
        onClick={minus}
        text='Subtract 1'
        type='minus' />
      
      <Button
        onClick={magic}
        text='Random number'
        type='magic' />

      <Button
        onClick={plus}
        text='Add 1'
        type='plus' />
    </div>
  </form>
}

export default connect(
  state => ({ app: state.app }),
  { ...actions }
)(Form)