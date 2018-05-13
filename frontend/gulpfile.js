const gulp = require('gulp');
const path = require('path');
gulp.task('default', ['compile', 'copy-html', 'copy-public' ], function () {
        
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
                      presets: ['react', 'es2015', 'es2016']
                    }
                  }
                },
                {
                  test: /\.css$/,
                  use: [
                    { loader: 'style-loader' },
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true
                      }
                    }
                  ]
                }
              ]
            }
        }

        return gulp.src('app/index.js')
                   .pipe(webpack_stream(webpack_config, webpack))
                   .pipe(gulp.dest('dist/js/'));
});

  gulp.task('copy-html', function() {
    return gulp.src('app/index.html')
    .pipe(gulp.dest('dist/'));
  });
  
  gulp.task('copy-public', function() {
    return gulp.src('app/public/**')
    .pipe(gulp.dest('dist/'));
  });