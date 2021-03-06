const argv = require('minimist')(process.argv.slice(2))
const browserify = require('browserify')
const fs = require('fs')
const path = require('path')
const uglifyify = require('uglifyify')
const html = require('simple-html-index')

// get entry
var entry = argv._[0]
var title = argv._[1]
var appicon = argv._[2]
if (!entry) { entry = '1'}
if (!title) { title = entry}
if (!appicon) { appicon = ''}
const entryFilename = entry + '.js'
const entryFile = path.resolve(__dirname, 'src', entryFilename)


var b = browserify()
b.add(entryFile)
b.transform(require('babelify').configure({ presets: ["@babel/preset-env"] }))
b.transform(uglifyify, { global: true  })
b.bundle()
.pipe(fs.createWriteStream('static/' + entryFilename))

html({ title: title, entry: entryFilename, css: '../main.css', appicon: appicon })
  .pipe(fs.createWriteStream('static/' + entry + '.html'))
