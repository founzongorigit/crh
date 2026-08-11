export interface User {
  id: string
  nom: string
  prenom: string
  email: string
  type_profile: string
  role: string
  telephone: string
  photo_profile?: string
  actif: boolean
  date_creation: string
}

export interface AuthResponse {
  message: string
  user: User
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData extends LoginCredentials {
  nom: string
  prenom: string
  type_profile: string
  role: string
  telephone: string
  photo_profile?: File
}

export interface ErrorResponse {
  error: string
  detail?: string
}