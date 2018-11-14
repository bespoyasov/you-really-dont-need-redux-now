import React from 'react'

const Button = ({text, type='plus', ...rest}) => (
  <button className={`button button--${type}`} type='button' {...rest}>
    <span className='is-visually-hidden'>
      {text}
    </span>
  </button>
)

export default Button