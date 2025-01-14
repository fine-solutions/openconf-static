require('dotenv').config({ path: '.env' })

const DEFAULT_ENVS = {
  BASE_URL: "http://localhost:8080",
  BASE_TITLE: "OpenConf",
  BASE_DESCRIPTION: "OpenConf Engine",
  CONFERENCES: "2025",
  SERVER_PATH: "/web/sites/openconf/www/",
  GITLAB_TOKEN: "",
}

function getEnv(envKey) {
  return process.env[envKey] || DEFAULT_ENVS[envKey]
}

module.exports = {
  baseUrl: getEnv('BASE_URL'),
  baseTitle: getEnv('BASE_TITLE'),
  baseDescription: getEnv('BASE_DESCRIPTION'),
  conferences: getEnv('CONFERENCES'),
  serverPath: getEnv('SERVER_PATH'),
  gitlabToken: getEnv('GITLAB_TOKEN'),
}
