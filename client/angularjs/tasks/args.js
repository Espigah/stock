module.exports = require('yargs')
.option('port', {
    alias: 'p',
    type: 'number',
    default: "9090",
    description: 'Change app port'
  })
  .argv
