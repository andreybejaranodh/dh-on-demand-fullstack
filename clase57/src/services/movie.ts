import axios from "axios"

import { IMovie } from "../models/movie.model"
import { IBaseResponse } from "../models/common.model"

export async function getMovies(): Promise<IBaseResponse<IMovie[]>> {
  try {
    const token = localStorage.getItem('liteflix-token')
    const response = await axios.get('http://localhost:3000/api/movie', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error: any) {
    throw {
      message: error.response.data.message,
      status: error.response.status
    }
  }
}
