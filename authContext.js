import React, {createContext, useState} from 'react';

export const AuthContext = createContext({ });

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const value = {user, setUser}
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider;