export interface Options {
  message: string
}

export const main = (options: Options): void => {
  console.log('main:', options.message)
}

export default main
