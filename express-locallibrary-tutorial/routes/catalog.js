const express = require('express');
const router = express.Router();

// 导入控制器模块
const book_controller = require("../controllers/bookController");

// 图书路由
// GET 获取图书编目主页
router.get('/', book_controller.index);

// GET 根据ID请求图书信息
router.get("/bookquery", book_controller.book_query_get);

// POST 根据ID请求图书信息
router.post("/bookquery", book_controller.book_query_post);

// GET 请求更新图书
router.get("/bookupdate", book_controller.book_update_get);

// POST 请求更新图书
router.post("/bookupdate", book_controller.book_update_post);

module.exports = router;