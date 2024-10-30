import { Button, Checkbox, Grid2, TextField } from "@mui/material"
import { useCallback, useEffect, useState } from "react"

function Login() {
  const [remenberMe, setRememberMe] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // componentDidMount
  useEffect(() => {
    console.log('Se monto el componente')
  }, [])

  // componentDidUpdate
  useEffect(() => {
    console.log('Email cambio')
  }, [email])

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Se desmonto el componente')
    }
  }, [])

  const handleSubmit = useCallback(() => {
    console.log(email, password)
  }, [email, password])

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, sm: 10, md: 6 }} offset={{ sm: 1, md: 3 }}>
        <TextField label="Email" type="email" fullWidth onChange={(e) => setEmail(e.target.value)} />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 10, md: 6 }} offset={{ sm: 1, md: 3 }}>
        <TextField label="Password" type="password" fullWidth onChange={(e) => setPassword(e.target.value)}/>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 10, md: 6 }} offset={{ sm: 1, md: 3 }}>
        <Button variant="contained" fullWidth onClick={handleSubmit}>Login</Button>
        <Checkbox
          checked={remenberMe}
          onChange={(e: {
            target: { checked: boolean | ((prevState: boolean) => boolean) } }) => setRememberMe(e.target.checked)}
        />
      </Grid2>
    </Grid2>
  )
}

export default Login
