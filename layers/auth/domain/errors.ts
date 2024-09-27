// General errors
export const ERRORS = {
  UNEXPECTED_ERROR: 'An unexpected error occurred',
  INVALID_INPUT: 'Invalid input provided',
} as const

// Repository errors
export const REPOSITORY_ERRORS = {
  USER_NOT_FOUND: 'User not found in the database',
  DATABASE_ERROR: 'A database error occurred',
  DUPLICATE_EMAIL: 'Email already exists in the database',
  CONNECTION_FAILED: 'Failed to connect to the database',
  QUERY_FAILED: 'Database query failed',
  TRANSACTION_FAILED: 'Database transaction failed',
} as const

// Use case errors
export const USECASE_ERRORS = {
  USER_ALREADY_EXISTS: 'User already exists',
  USER_CREATION_FAILED: 'Failed to create user',
  USER_NOT_FOUND: 'User not found',
  INVALID_CREDENTIALS: 'Invalid credentials provided',
  LOGIN_FAILED: 'Login failed. Please check your credentials and try again',
  USER_REGISTRATION_FAILED: 'Failed to register user',
  PASSWORD_RESET_FAILED: 'Failed to reset password',
  EMAIL_SENDING_FAILED: 'Failed to send email',
  UNAUTHORIZED_ACCESS: 'Unauthorized access to resource',
  FORBIDDEN_ACTION: 'Action forbidden for current user',
} as const
