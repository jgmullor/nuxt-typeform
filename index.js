const { resolve } = require('path')

module.exports = function () {
    this.addPlugin({
        fileName: 'nuxt-typeform.js',
        src: resolve(__dirname, 'plugin.js'),
        options: {},
        template: {
            ssr: false
        }
    });
}

module.exports.meta = require('./package.json')
