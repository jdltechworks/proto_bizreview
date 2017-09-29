import hot from './hot'
import { join } from 'path'
import merge from 'webpack-merge'
import production from './production'
import development from './development'

import BundleTracker from 'webpack-bundle-tracker'
const document_root = '..'

export const output_paths = {
    hot: join(__dirname, `${document_root}/hot`),
    development: join(__dirname, `${document_root}/dist`),
    production: join(__dirname, `${document_root}/dist`)
}

export const entry = {
    'app': [join(__dirname, `${document_root}/src/index.js`)]
}

export const rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
    }
]

export const environment = {
    hot,
    development,
    production
}

export default ({env, options}) => {
    let config = {
        entry,
        target: 'web',
        output: {
            path: join(output_paths[env]),
            filename: '[name].js',
            libraryTarget: 'var',
            library: '[name]'
        },
        module: {
            rules
        },
        plugins: [
            new BundleTracker({
                path: join(output_paths[env]),
                filename: 'webpack-stats.json',
                logTime: true,
                indent: 4
            })
        ]
    }

    const strategy = {
        'output': 'append',
        'entry': 'append',
        'plugins': 'append'
    }

    return merge.strategy(strategy)(config, environment[env]())
}
