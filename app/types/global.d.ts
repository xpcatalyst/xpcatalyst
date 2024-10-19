// ========= Email ============= //

type Email = string

// ========= Result ============= //
type Error = string

type Result<T> = Success<T> | Failure

interface Success<T> {
  success: true
  value: T
}

interface Failure {
  success: false
  error: Error | string
}

declare const success: <T>(value: T) => Success<T>
declare const failure: (error: Error | string) => Failure
