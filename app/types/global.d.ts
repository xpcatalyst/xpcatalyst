// ========= Email ============= //

type Email = string

// ========= Result ============= //
// declare const success: <T>(value: T) => Success<T>
// declare const failure: (error: Error | string) => Failure

type FailureMessage = string

// Result type that can be either a success or a failure
type Result<T> = Success<T> | Failure

// Success type alias
type Success<T> = {
  success: true
  value: T
}

// Failure type alias:  closed and cannot be extended
// Instead of interfaces
type Failure = {
  success: false
  error: FailureMessage | Error
}
