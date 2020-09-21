'use strict';

const path = require('path');

const staticPath = path.join(__dirname, '..', 'static');

module.exports = {
    mode: 'development',
    devtool: '#source-map',

    devServer: {
        overlay: true,
        contentBase: staticPath
    }

};
