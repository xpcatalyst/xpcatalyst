// export type Result<T> =
//   | { ok: true, value: T } // Success case
//   | { ok: false, error: string } // Error case

export type Error = string

// result.ts
// export type Result<T, E = Error> =
//   | { success: true, value: T }
//   | { success: false, error: E }

export type Result<T, E = Error> =
  | { success: true, value: T }
  | { success: false, error: E }

export const success = <T>(value: T): Result<T> => ({
  success: true,
  value,
})

export const failure = <E>(error: E): Result<never, E> => ({
  success: false,
  error,
})

// Utility type guards
// export const isSuccess = <T, E = Error>(result: Result<T, E>): result is Result<T> => result.success
// export const isFailure = <T, E>(result: Result<T, E>): result is Result<never, E> => !result.success
