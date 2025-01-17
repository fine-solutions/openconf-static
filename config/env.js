const ENVS = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
}
const env = process.env.NODE_ENV || ENVS.PRODUCTION
const isProdEnv = env === ENVS.PRODUCTION
const isDevEnv = !isProdEnv

export default Object.freeze({
  isProdEnv,
  isDevEnv,
})
