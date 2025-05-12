export interface CreatePetForm {
  name: string
  breed: string
  gender: string
  age: number
  size: number
  color: string
  addInformation?: string
  price: number
  location: string
  category: 'dog' | 'cat'
}