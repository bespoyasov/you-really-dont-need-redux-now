const MAX = 1000000000000
const MIN = -1000000000000

export const normalizeAmount = (amount, min=MIN, max=MAX) =>
  Math.min(Math.max(amount, min), max)