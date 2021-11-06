const Logger = {
  error: str => {
    console.log('\x1b[31m%s\x1b[0m', str)
  },
  success: str => {
    console.log('\x1b[32m%s\x1b[0m', str)
  },
  warning: str => {
    console.log('\x1b[33m%s\x1b[0m', str)
  }
}

module.exports = Logger;