import dotenv from 'dotenv'
dotenv.config()

const DEFAULT_ENVS = {
  BASE_URL: 'http://localhost:8080',
  BASE_TITLE: 'OpenConf',
  BASE_DESCRIPTION: 'OpenConf Engine',
  BASE_SUFFIX: 'openconf',
  CONFERENCES: '2025',
  SERVER_PATH: '/web/sites/openconf/www/',
  GITLAB_TOKEN: '',
}

function getEnv(envKey) {
  return process.env[envKey] || DEFAULT_ENVS[envKey]
}

export default {
  baseUrl: getEnv('BASE_URL'),
  baseTitle: getEnv('BASE_TITLE'),
  baseDescription: getEnv('BASE_DESCRIPTION'),
  baseSuffix: getEnv('BASE_SUFFIX'),
  conferences: getEnv('CONFERENCES'),
  serverPath: getEnv('SERVER_PATH'),
  gitlabToken: getEnv('GITLAB_TOKEN'),
}
