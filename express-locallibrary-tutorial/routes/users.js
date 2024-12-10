var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 在 routes/users.js 中定义的路由路径是 相对于挂载路径 的，而不是绝对路径, app.js中已经定义了app.use('/users', usersRouter);所以这里只需要/cool
router.get('/cool', function(req, res, next) {
  // res.render('users', { title: 'cool' }); 表示渲染 views 目录下的 users.pug 模板，并传递一个 title 变量，其值为 'cool'
  res.render( 'users', {title: '酷!'});
});

module.exports = router;
