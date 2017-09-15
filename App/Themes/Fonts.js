const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black'
}

const size = {
  extraLarge: 36,
  large: 20,
  medium: 16,
  small: 13
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.extraLarge
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.large
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  tiny: {
    fontFamily: type.base,
    fontSize: size.small
  }
}

export default {
  type,
  size,
  style
}
