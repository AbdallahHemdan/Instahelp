const isLoggedIn = () => {
  return localStorage.getItem('accessToken') ? true : false
}

const getUserId = () => {
  return localStorage.getItem('accessToken')
}

export { isLoggedIn, getUserId }
