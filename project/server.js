const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session');
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const index = require('./expressrouter/index')
const mine = require('./expressrouter/mine')
const util = require('./expressrouter/util')
const homepage = require('./expressrouter/homepage')

const app = express()
app.use(cookieParser())
app.use(session({
	secret: 'nsessionid'
}));

const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use("/exp/util", util)

app.use('/exp', index)

app.use('/exp/mine', mine)

app.use('/exp/homepage', homepage)

app.use(express.static(__dirname))

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})
