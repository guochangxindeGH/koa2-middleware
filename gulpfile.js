const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

async function asyncAwaitTask() {
    gulp.task('default',function(){
        gulp.src('js/*.js') // 路径问题：gulpfile.js为路径的起点。此路径表示js文件下的所有js文件。
            .pipe(concat('all.js')) //合并成的js文件名称
            .pipe(uglify()) //压缩
            .pipe(gulp.dest('build')); //打包压缩在build目录下。
    });
}

exports.default = asyncAwaitTask;
