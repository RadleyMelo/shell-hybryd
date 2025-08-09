module.exports = (config) => {
  config.optimization = config.optimization || {};
  config.optimization.splitChunks = false;
  config.output = config.output || {};
  config.output.filename = 'remote-hybrid.wc.js';
  return config;
};
