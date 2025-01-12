require('dotenv').config({ path: '.env' })

const DEFAULT_ENVS = {
  BASE_URL: "https://rlnc.ru",
  CONFERENCES: "2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025",
  SERVER_PATH: "/web/sites/rlnc/www/",
  GITLAB_TOKEN: "",
}

function getEnv(envKey) {
  return process.env[envKey] || DEFAULT_ENVS[envKey]
}

module.exports = {
  baseUrl: getEnv('BASE_URL'),
  conferences: getEnv('CONFERENCES'),
  serverPath: getEnv('SERVER_PATH'),
  gitlabToken: getEnv('GITLAB_TOKEN'),
}
