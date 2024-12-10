const asyncHandler = require("express-async-handler");

// 显示所有的图书
exports.book_list = asyncHandler(async (req, res, next) => {
    res.send("未实现：图书列表");
});

// 通过 GET 显示更新图书。
exports.book_update_get = asyncHandler(async (req, res, next) => {
    res.send("未实现：更新图书 GET");
});
  
// 处理 POST 时的更新图书。
exports.book_update_post = asyncHandler(async (req, res, next) => {
    res.send("未实现：更新图书 POST");
});