import { join, resolve } from 'path'
import merge from 'webpack-merge'
import { paths } from 'paths'


export default ({env, options}) => {
    const strategy = {
        entry: '',
        output: ''
    }
    return merge.strategy(strategy)({
        output: {
          path: paths.development,
          filename: 'app.js'
        },
        module: {
          rules: [
            { test: /\.js$/, use: 'babel-loader' }
          ]
        },
        plugins: [
        ]
    })
}
