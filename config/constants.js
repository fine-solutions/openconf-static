import dotenv from 'dotenv'
dotenv.config()

const DEFAULT_ENVS = {
  BASE_URL: 'http://localhost:8080',
  BASE_TITLE: 'OpenConf',
  BASE_SUBTITLE: 'The<br>Best<br>Quality',
  BASE_CAPTION: 'OpenConf Engine allow to organize<br>a custom conference in few steps.',
  BASE_LOCATION: 'World',
  BASE_SUFFIX: 'openconf',
  YEARS: String(new Date().getFullYear()),
  SERVER_PATH: '/web/sites/openconf/www/',
  GITLAB_TOKEN: '',
}

function getEnv(envKey) {
  return process.env[envKey] || DEFAULT_ENVS[envKey]
}

export default {
  baseUrl: getEnv('BASE_URL'),
  baseTitle: getEnv('BASE_TITLE'),
  baseSubTitle: getEnv('BASE_SUBTITLE'),
  baseCaption: getEnv('BASE_CAPTION'),
  baseLocation: getEnv('BASE_LOCATION'),
  baseSuffix: getEnv('BASE_SUFFIX'),
  years: getEnv('YEARS').split(', '),
  serverPath: getEnv('SERVER_PATH'),
  gitlabToken: getEnv('GITLAB_TOKEN'),
}
