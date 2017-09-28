import {join, resolve} from 'path'
import cors from 'cors'

export const devServer = ({hot, host, port, base} = {}) => ({
    devServer: {
        hot,
        contentBase: base,
        historyApiFallback: true,
        stats: 'errors-only',
        host, // Defaults to `localhost`
        port, // Defaults to 8080
        overlay: {
            errors: true,
            warnings: true,
        },
        setup(app) {
            app.use(cors())
        }
    },
});
