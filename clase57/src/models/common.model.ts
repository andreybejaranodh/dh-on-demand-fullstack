export interface IBaseResponse<T> {
  data: T
  metadata: {
    status: number
    total: number
  }
}
