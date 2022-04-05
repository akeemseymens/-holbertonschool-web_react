import React from 'react';

const defaultUser = {
  email: 'default-email',
  password: 'default-password',
  isLoggedIn: false,
};

const defaultLogOut = () => {return undefined};

const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export { defaultUser, defaultLogOut, AppContext };
