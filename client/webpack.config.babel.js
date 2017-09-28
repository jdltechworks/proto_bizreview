
export default (env, options) => {
    console.log(env)
    return require(`./config/${env}.js`).default({ env, options })
}
