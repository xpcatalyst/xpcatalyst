export type Error = string

export type Result<T> = Success<T> | Failure

export interface Success<T> {
  success: true
  value: T
}

export interface Failure {
  success: false
  error: Error
}

export const success = <T>(value: T): Success<T> => ({
  success: true,
  value,
})

export const failure = (error: Error): Failure => ({
  success: false,
  error,
})
