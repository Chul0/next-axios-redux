const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://myapi-profstream.herokuapp.com/api/19fc0e/books' : 'somethingelse'