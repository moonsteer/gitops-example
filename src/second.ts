import main from './main'

export const second = (message: string, ignoreMain: boolean = false): void => {
  console.log('second:', message)
  !ignoreMain && main({ message })
}

export default second
