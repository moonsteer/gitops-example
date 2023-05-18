import main from './main'

export const first = (message: string, ignoreMain: boolean = false): void => {
  console.log('first:', message)
  !ignoreMain && main({ message })
}

export default first
