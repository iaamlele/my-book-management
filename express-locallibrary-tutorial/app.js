var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 用导入的 express 模块来创建 app 对象，然后使用它来设置视图（模板）引擎
var app = express();

// view engine setup
// 首先设置 'views' 以指定模板的存储文件夹（此处设为子文件夹 /views）
app.set('views', path.join(__dirname, 'views'));
// 然后设置 'view engine' 以指定模板库（本例中设为“pug” ）
app.set('view engine', 'pug');

// app.use() 调用将中间件库添加进请求处理链
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 除了之前导入的第三方库之外，我们还使用 express.static 中间件将项目 /public 目录下所有静态文件托管至根目录
app.use(express.static(path.join(__dirname, 'public')));

// 所有中间件都已设置完毕，现在把（之前导入的）路由处理器添加到请求处理链中。从而为网站的不同部分定义具体的路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
