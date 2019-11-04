const argv = require('yargs').argv;
const path = require('path');


let configPath = argv.config || process.env.CONFIG || './adapters.config.json';
console.log("configPath", configPath)

const configs = require(configPath).filter(config=>config.enabled)
console.log("configs", configs)



export default configs;