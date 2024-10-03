// Domain/Entities
export { type Credentials, validateCredentials } from './domain/entities/credentials'
export type { User } from './domain/entities/user'

// Domain/Ports
export type { IAuthRepository } from './domain/ports/auth-repository'

// Domain/Use cases
export { createAddUserUseCase } from './domain/usecases/add-user'
export { createLoginUseCase, type ILoginUseCase } from './domain/usecases/login'

// Domain/Errors
export { ERRORS, REPOSITORY_ERRORS, USECASE_ERRORS } from './domain/errors'

// Infrastructure/Adapters (repositories)
export { createInMemoryRepository } from './infrastructure/in-memory-repository'
export { createSupabaseRepository } from './infrastructure/supabase-repository'
export { createAuthRepository } from './infrastructure/auth-repository-factory'

// Presentation
export { useLogin } from './presentation/composables/useLogin'
export { default as LoginForm } from './presentation/components/LoginForm.vue'
