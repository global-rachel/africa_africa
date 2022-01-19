// vue.config.js
const path =  require('path');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const resolve = (dir) => path.join(__dirname, dir);
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {

    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    indexPath: 'index.html',
    outputDir: process.env.outputDir || 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    runtimeCompiler: true,
    productionSourceMap: !IS_PROD,
    parallel: require("os").cpus().length > 1,
    pwa: {},

    chainWebpack: config => {
        config.resolve.symlinks(true); 
        config.plugin("html").tap(args => {
            args[0].chunksSortMode = "none";
            return args;
        });
        config.resolve.alias 
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@store', resolve('src/store'));
        
            config.optimization.minimizer('terser').tap((args) => {
              args[0].terserOptions.compress.drop_console = true
              return args
            });
    },

    css: {
        extract: IS_PROD,
        requireModuleExtension: false,
        loaderOptions: {
                less: {
                    globalVars: {
                        primary: '#333'
                    }
                }
        }
    },

    devServer: {
            overlay: { 
              warnings: true,
              errors: true
            },
            host: "localhost",
            port: 8080, 
            https: false, 
            open: false, 
            hotOnly: true,
           
        },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'zh-TW',
        localeDir: 'locales',
        enableLegacy: true,
        runtimeOnly: false,
        compositionOnly: true,
        fullInstall: true
      }
    }
}
