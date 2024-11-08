import { createContext, ReactNode, useContext, useMemo, useState } from "react"

interface IUser {
  id: number
  email: string,
  name: string,
  role: string
}

type AuthContextType = {
  user: IUser | null
  setUser: (user: IUser | null) => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => { }
})

export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null)

  const setUserContext = (user: IUser | null) => {
    setUser(user)
  }

  const value = useMemo(() => ({
    user,
    setUser: setUserContext
  }), [user])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
