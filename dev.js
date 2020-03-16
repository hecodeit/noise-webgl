// https://github.com/mattdesl/codevember

const budo = require('budo')
const argv = require('minimist')(process.argv.slice(2))
const path = require('path')
const babelify = require('babelify')
const open = require('opn')
const fs = require('fs')
const simpleHtml = require('simple-html-index')

var entry = argv._[0]
if (!entry) {
  entry = '1'
}

const entryFilename = entry + '.js'

const entryFile = path.resolve(__dirname, 'src', entryFilename)
budo(entryFile, {
  serve: 'static/' + entry + '.js',
  live: true,
  open: true,
  verbose: true,
  dir: __dirname,
  stream: process.stdout,
  forceDefaultIndex: true,
  defaultIndex: function (opt) {
    var html = entry + '.html'
    if (!fs.existsSync(html)) return simpleHtml(opt)
    return fs.createReadStream(html)
  }
})
