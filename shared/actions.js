export const minus = () => ({ type: 'MINUS' })

export const plus = () => ({ type: 'PLUS' })

export const magic = () => ({ type: 'MAGIC' })

export const reset = () => ({ type: 'RESET' })

export const change = e => ({ 
  value: e.target.value,
  type: 'CHANGE', 
})