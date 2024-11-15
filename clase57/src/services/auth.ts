import axios from 'axios'

export async function getAuthToken(): Promise<string> {
  try {
    const response = await axios.get('http://localhost:3000/auth/token')
    return response.data.token
  } catch (error: any) {
    throw {
      message: error.response.data.message,
      status: error.response.status
    }
  }
}

export async function login(email: string, password: string): Promise<string> {
  try {
    const token = localStorage.getItem('liteflix-token')
    const response = await axios.post('http://localhost:3000/api/user/login', {
      email,
      password
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data.token
  } catch (error: any) {
    throw {
      message: error.response.data.message,
      status: error.response.status
    }
  }
}
