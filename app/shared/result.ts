export const success = <T>(value: T): Success<T> => ({
  success: true,
  value,
})

export const failure = (error: FailureMessage | Error): Failure => ({
  success: false,
  error,
})
