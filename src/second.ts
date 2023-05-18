import main from './main'

export const second = (message: string): void => {
  console.log('second:', message)
  main({ message })
}

export default second
