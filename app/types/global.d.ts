// ========= Email ============= //

type Email = string

// ========= Result ============= //
// declare const success: <T>(value: T) => Success<T>
// declare const failure: (error: Error | string) => Failure

type FailureMessage = string

// Result type that can be either a success or a failure
type Result<T> = Success<T> | Failure

// Success interface
interface Success<T> {
  success: true
  value: T
}

// Failure interface
interface Failure {
  success: false
  error: FailureMessage | Error
}
