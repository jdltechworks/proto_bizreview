import { join, resolve } from 'path'
import merge from 'webpack-merge'
import { output_paths } from './base'


export default ({env, options}) => {
    const strategy = {
        entry: '',
        output: ''
    }
    return merge.strategy(strategy)({
        output: {
          path: output_paths.production,
          filename: 'app.js'
        },
        plugins: [
        ]
    })
}
