module.exports = api => {
  api.extendPackage({
    dependencies: {
      "json-loader": "^0.5.7",
      "yaml-loader": "^0.6.0"
    }
  })
}