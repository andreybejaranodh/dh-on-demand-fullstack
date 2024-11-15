import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"

import * as authService from '../services/auth'

interface IUser {
  id: number
  email: string,
  name: string,
  role: string
}

type AuthContextType = {
  user: IUser | null
  setUser: (user: IUser | null) => void
  token: string | null
  setToken: (token: string | null) => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => { },
  token: null,
  setToken: () => { }
})

export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const setUserContext = (user: IUser | null) => {
    setUser(user)
  }

  const setTokenContext = (token: string | null) => {
    setToken(token)
    localStorage.setItem('liteflix-token', token as string)
  }

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await authService.getAuthToken()
        setTokenContext(token)
      } catch (error: any) {
        console.log(error)
      }
    }
    getToken()
  }, [])

  const value = useMemo(() => ({
    user,
    setUser: setUserContext,
    token,
    setToken: setTokenContext
  }), [token, user])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
