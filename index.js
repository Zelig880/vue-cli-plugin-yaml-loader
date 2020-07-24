module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    webpackConfig.resolve.extensions.add('.yml').add('.yaml')
    webpackConfig.module
      .rule('yaml')
      .test(/\.ya?ml?$/)
      .use('json-loader')
      .loader('json-loader')
      .end()
      .oneOf('stream')
      .resourceQuery(/stream/)
      .use('yaml-loader')
      .loader('yaml-loader')
      .options({ asStream: true })
      .end()
      .end()
      .oneOf('normal')
      .use('yaml-loader')
      .loader('yaml-loader')
      .end()
      .end();
  })
}