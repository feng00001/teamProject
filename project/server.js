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
const classify = require('./expressrouter/classify')
const slotlist = require('./expressrouter/slotlist')
const cartcount = require('./expressrouter/cartcount')
const shopbuy = require('./expressrouter/shopbuy')
const shoplife = require('./expressrouter/shoplife')
const shopquality = require('./expressrouter/shopquality')
const detail = require('./expressrouter/detail')
const apply = require('./expressrouter/apply')
const order = require('./expressrouter/order')
const search = require('./expressrouter/search')

const app = express()
app.use(cookieParser())
// app.use(session({
// 	secret: 'nsessionid'
// }));
app.use(session({
    secret: 'nsessionid',
    key: 'nsessionid',
    cookie: {
        secret: true,
        expires: false
    },
    resave: true,
    saveUninitialized: true
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

app.use('/exp/classify', classify)

app.use('/exp/slotlist', slotlist)

app.use('/exp/cartcount', cartcount)

app.use('/exp/shopbuy', shopbuy)

app.use('/exp/shoplife', shoplife)

app.use('/exp/shopquality', shopquality)

app.use('/exp/detail', detail)

app.use('/exp/apply', apply)

app.use('/exp/order', order)

app.use('/exp/search', search)

app.use(express.static(__dirname))

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})
