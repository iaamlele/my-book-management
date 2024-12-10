const express = require('express');
const router = express.Router();

// 导入控制器模块
const book_controller = require("../controllers/bookController");

// 图书路由
// GET 获取图书编目主页
router.get('/', book_controller.index);

// GET 请求完整图书列表
router.get("/books", book_controller.book_list);

// GET 请求更新图书
router.get("/book/:id/update", book_controller.book_update_get);

// POST 请求更新图书
router.post("/book/:id/update", book_controller.book_update_post);

