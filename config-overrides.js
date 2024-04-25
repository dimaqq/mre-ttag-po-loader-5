
module.exports = function override(config, env) {
  // 1. Tell webpack how to load PO files
  if (false) 
  config.module.rules.push({
  test: [/\.po$/],
  // loader: "ttag-po-loader",
  loader: "/Users/dmitrii.tisnek/code/test-ttag/node_modules/ttag-po-loader/index.js",
  });

  // 2. Exempt PO files from default rules if you use create-react-app
  const loaders = config.module.rules.find(r => r.oneOf).oneOf;
  // temp debug
  loaders.find(l => l?.type?.match(/asset\/resource/)).exclude.push(/[.]po$/);
  loaders.unshift({
    test: /\.po$/,
    type: "asset/resource",
    loader: "/Users/dmitrii.tisnek/code/test-ttag/node_modules/ttag-po-loader/index.js",
  })
  console.log(loaders);

  return config;
}
