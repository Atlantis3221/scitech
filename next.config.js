require('dotenv').config()
const withLess = require("next-with-less");

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    env: {
        URLPREFIX: isProd ? process.env.DOMAIN : 'http://localhost:3000',
    },
}

module.exports = withLess(nextConfig)