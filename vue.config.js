module.exports = {
    // ...other vue-cli plugin options...
    chainWebpack: config => {
        config.module
            .rule('scss')
            .oneOf('vue')
            .use('resolve-url-loader')
            .loader('resolve-url-loader').options({
                keepQuery: true
            })
            .before('sass-loader');
    },
    css: {
        loaderOptions: {
            sass: {
                sourceMap: true,
                }
            }       
    },
    pwa: {
        name: 'My Perek Shira',
        themeColor: '#0077bb',
        msTileColor: '#0077bb',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxOptions: {
            navigateFallback: '/index.html',
        }
    }
}