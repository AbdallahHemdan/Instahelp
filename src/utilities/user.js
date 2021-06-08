const getUserInfo = () => {
  let userInfo = {
    id: localStorage.getItem('user_id'),
    image: localStorage.getItem('user_image'),
    username: localStorage.getItem('displayName'),
    subtitle: localStorage.getItem('user_subtitle'),
    description: localStorage.getItem('user_description'),
  };

  return userInfo;
};

export { getUserInfo };
