const { alias } = require('react-app-rewire-alias')


module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@containers': 'src/containers',
    '@constans': 'src/constans',
    '@hoc-helpers': 'src/hoc-helpers',
    '@services': 'src/services',
    '@utils': 'src/utils',
    '@styles': 'src/styles',

  })(config);

  return config;
}