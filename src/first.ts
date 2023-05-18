import main from './main'

export const first = (message: string): void => {
  console.log('first:', message)
  main({ message })
}

export default first
