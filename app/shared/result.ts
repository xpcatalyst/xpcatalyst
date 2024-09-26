// export type Result<T> =
//   | { ok: true, value: T } // Success case
//   | { ok: false, error: string } // Error case

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

// Utility type guards
// export const isSuccess = <T, E = Error>(result: Result<T, E>): result is Result<T> => result.success
// export const isFailure = <T, E>(result: Result<T, E>): result is Result<never, E> => !result.success
