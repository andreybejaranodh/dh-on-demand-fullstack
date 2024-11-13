import { Button, Grid2, TextField } from "@mui/material"
import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import validator from 'validator'

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const setFormValues = useCallback((name: string, value: string | boolean) => {
    setForm((current) => ({
      ...current,
      [name]: value
    }))
  }, [])

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues(name, value)
  }, [setFormValues])

  const isValidForm = useCallback(() => {
    const { email, password } = form
    const errors = {
      email: '',
      password: ''
    }
    if (validator.isEmpty(email)) {
      errors.email = 'El E-mail es requerido'
    } else if (!validator.isEmail(email)) {
      errors.email = 'El E-mail es invalido'
    }
    if (validator.isEmpty(password)) {
      errors.password = 'La contraseña es requerida'
    }
    setErrors(errors)
    return Object.values(errors).every((error) => error === '')
  }, [form])

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isValidForm()) {
      console.log(form)
    }
  }, [form, isValidForm])

  return (
    <Grid2 container spacing={2}>
      <Grid2 component="form" container spacing={2} size={12} onSubmit={onSubmit}>
        <Grid2 size={{ xs: 12, sm: 10, md: 6 }} offset={{ sm: 1, md: 3 }}>
          <TextField
            label="Email"
            type="text"
            fullWidth
            name="email"
            value={form.email}
            onChange={onChange}
            error={!!errors.email}
            helperText={errors.email || undefined}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 10, md: 6 }} offset={{ sm: 1, md: 3 }}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            name="password"
            value={form.password}
            onChange={onChange}
            error={!!errors.password}
            helperText={errors.password || undefined}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 10, md: 6 }} offset={{ sm: 1, md: 3 }}>
          <Button variant="contained" fullWidth type="submit">Login</Button>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default Login
