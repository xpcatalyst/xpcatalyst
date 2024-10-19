export const success = <T>(value: T): Success<T> => ({
  success: true,
  value: value as T,
})

export const failure = (error: Error | string): Failure => ({
  success: false,
  error,
})
