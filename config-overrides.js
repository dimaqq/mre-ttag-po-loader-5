
module.exports = function override(config, env) {
  // 1. Tell webpack how to load PO files
  config.module.rules.push({
  test: [/\.po$/],
  loader: "ttag-po-loader",
  });

  // 2. Exempt PO files from default rules if you use create-react-app
  const loaders = config.module.rules.find(r => r.oneOf).oneOf;
  // temp debug
  console.log(loaders);
  loaders.find(l => l?.loader?.match(/file-loader/)).exclude.push(/[.]po$/);

  return config;
}
