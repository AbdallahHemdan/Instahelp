const getUserInfo = () => {
  let userInfo = {
    id: localStorage.getItem('user_id'),
    image: localStorage.getItem('user_image'),
    username: localStorage.getItem('displayName'),
    subtitle: localStorage.getItem('user_subtitle'),
    description: localStorage.getItem('description'),
  };

  return userInfo;
};

const getUserId = () => {
  return localStorage.getItem('user_id');
};

const getUsername = () => {
  return localStorage.getItem('displayName');
};

export { getUserInfo, getUserId, getUsername };
