// https://github.com/mattdesl/codevember
const budo = require('budo')
const argv = require('minimist')(process.argv.slice(2))
const path = require('path')

// get entry
var entry = argv._[0]
if (!entry) { entry = '1'}
const entryFilename = entry + '.js'
const entryFile = path.resolve(__dirname, 'src', entryFilename)

// budo
budo(entryFile, { live: true, open: true, stream: process.stdout })
