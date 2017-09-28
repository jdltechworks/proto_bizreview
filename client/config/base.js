import hot from 'hot'
import { join } from 'path'
import merge from 'webpack-merge'
import production from 'production'
import development from './development'

import bundleTracker from 'webpack-bundle-tracker'
django_root = '..'

export const output_paths = {
    hot: join(__dirname, `${django_root}/hot`),
    development: join(__dirname, `${django_root}/dist`)
    production: join(__dirname, `${django_root}/dist`),
}

export const entry = [
    join(__dirname, `${document_root}/src/app.js`)
]

export const rules = [
    {
        test: /\.js$/, use: 'babel-loader'
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
        output: {
            path: join(output_paths[env])
        },
        module: {
            rules
            },
            plugins: [
            new BundleTracker({
                path: join(paths[env]),
                filename: 'webpack-stats.json',
                logTime: true,
                indent: 4
            })
        ]
    }

    return merge(config, environment[env])
}
