import { join, resolve } from 'path'
import merge from 'webpack-merge'
import { output_paths } from './base'
import { devServer } from './partials'

const DOMAIN = process.env.DOMAIN || 'localhost'
const PORT = process.env.PORT || 8080
const PROTOCOL = process.env.PROTOCOL || 'http'

export default () => {
    const strategy = {
        entry: 'append',
        output: 'append'
    }
    return merge.strategy(strategy)({
        entry: [
            'react-hot-loader/patch',
            //Dev server bundle
            `webpack-dev-server/client?${PROTOCOL}://${DOMAIN}:${PORT}`,
            //Only reload successful updates
            'webpack/hot/only-dev-server',
        ],
        output: {
          path: output_paths.hot,
          filename: 'app.js',
          publicPath: `${PROTOCOL}://${DOMAIN}:${PORT}/hot/js/`
        },
        plugins: [
        ]
    }, devServer({
        hot: true,
        host: DOMAIN,
        port: PORT,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        publicPath: `${PROTOCOL}://${DOMAIN}:${PORT}/hot/js/`
    }))
}
