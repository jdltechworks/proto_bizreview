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
        devtool: 'source-map',
        entry: {
            hot: [
                'react-hot-loader/patch',
                //Dev server bundle
                `webpack-dev-server/client?${PROTOCOL}://${DOMAIN}:${PORT}`,
                //Only reload successful updates
                'webpack/hot/only-dev-server'
            ]
        },
        output: {
          publicPath: `${PROTOCOL}://${DOMAIN}:${PORT}/hot/js/`
        },
        plugins: [
        ]
    }, devServer({
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        base: output_paths.hot
    }))
}
