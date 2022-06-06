// == travel Cart == //
export const setTravelCartInLocalStorage = (travelCart) => {
  localStorage.setItem('travelCart', JSON.stringify(travelCart))
}

export const getTravelCartFromLocalStorage = () => {
  const result = localStorage.getItem('travelCart')
  const travelCart = result ? JSON.parse(result) : null
  return travelCart
}

export const removeTravelCartFromLocalStorage = () => {
  localStorage.removeItem('travelCart')
}

// === User === //

export const setUserInLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}
