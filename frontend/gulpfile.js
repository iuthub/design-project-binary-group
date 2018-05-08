const gulp = require('gulp');
const path = require('path');
gulp.task('default', ['compile', 'copy-html' ], function () {
        
});

gulp.task('compile', function () {
        const isProduction = process.env.NODE_ENV == "production";
        
        const webpack        = require('webpack');
        const webpack_stream = require('webpack-stream');
        const webpack_config = {
            entry: './app/index.js',
            output: {
              filename: 'app.js',
              path: path.resolve(__dirname, 'dist')
            },
            mode:'development',
            module: {
              rules: [
                {
                  test: /\.js$/,
                  exclude: path.resolve(__dirname ,'./node_modules'),
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['react', 'es2015']
                    }
                  }
                }
              ]
            }
        }

        //         output   : {
        //                 filename: "app.js"
        //         },
        //         module   : {
        //                 loaders: [
        //                         {
        //                                 loader: "babel-loader",
        //                                 test: /\.jsx?$/, exclude: /node_modules/,
        //                                 query : {
        //                                         presets: [ 'react', 'es2015' ]
        //                                 }
        //                         }
        //                 ]
        //         },
        //         plugins  : [
        //                 new webpack.DefinePlugin({
        //                         'process.env': {
        //                                 'NODE_ENV'  : JSON.stringify('development'),
        //                                 'USE_REMOTE': JSON.stringify(process.env.USE_REMOTE),
        //                                 'RELEASE_VERSION': JSON.stringify(process.env.RELEASE_VERSION)
        //                         }
        //                 })
        //         ],
        //         externals: [
        //                 {
        //                         'xlsx'  : 'XLSX',
        //                         'nw.gui': "require('nw.gui')"
        //                 }
        //         ],
        //         devtool  : "eval",
        //         watch    : true
        // };
        
        // if (isProduction) {
        //         webpack_config.plugins = [
        //                 new webpack.DefinePlugin({
        //                         'process.env': {
        //                                 'NODE_ENV'  : JSON.stringify('production'),
        //                                 'USE_REMOTE': JSON.stringify('true'),
        //                                 'RELEASE_VERSION': JSON.stringify(process.env.RELEASE_VERSION)
                                        
        //                         }
        //                 }),
        //                 new webpack.optimize.UglifyJsPlugin({
        //                         compress: {
        //                                 warnings: true
        //                         }
        //                 })
        //         ];
        //         delete webpack_config.devtool;
        //         webpack_config.watch = false;
                
        //         console.log("PRODUCTION enabled")
        // } else {
        //         console.log("PRODUCTION disabled")
        // }
        
        return gulp.src('app/index.js')
                   .pipe(webpack_stream(webpack_config, webpack))
                   .pipe(gulp.dest('dist/js/'));
});

  gulp.task('copy-html', function() {
    return gulp.src('app/index.html')
    .pipe(gulp.dest('dist/'));
  });