const book_information = require("../data/books");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    const numBooks = await Promise.all([
        book_information.length
    ]);
    
    res.render("index", {
        title: "Local Library Home",
        book_count: numBooks
    })
});

// GET 根据ID查询图书
exports.book_query_get = asyncHandler(async (req, res, next) => {
    // 使用模板和数据创建并返回 HTML 文件
    res.render('book_query');
});

// POST 根据ID查询图书
exports.book_query_post = asyncHandler(async (req, res, next) => {
    try{
        const obj = req.body;
        if(!obj) {
            throw new Error('id为必填项!');
        }
        const id = obj.id;
        
        const bookname = book_information.find(elem => {
            if(parseInt(elem.id) === parseInt(id)) {
                return elem;
            }
        }).name;
        if(!bookname) {
            throw new Error('查询无此书!');
        }
        res.send(`查询成功, id为${id}的书名为: ${bookname}`);
    } catch(err) {
        res.status(400).send(`查找失败, 错误信息: ${err.message}`);
    }
});

// 通过 GET 显示更新图书。
exports.book_update_get = asyncHandler(async (req, res, next) => {
    res.render('book_update');
});
  
// 处理 POST 时的更新图书。
exports.book_update_post = asyncHandler(async (req, res, next) => {
    try{
        const obj = req.body;
        if(!obj) {
            throw new Error('ID和NewBookName为必填项!');
        }
        const id = obj.id;
        const newbookname = obj.newbookname;
        if(!id) {
            throw new Error('查无此书!');
        }
        book_information.find(elem => {
            if(parseInt(elem.id) === parseInt(id)) {
                elem.name = newbookname;
            }
        })
        res.send(`更新成功, 将id为${id}书名更新为: ${newbookname}`);
    } catch(err) {
        res.status(400).send(`更新失败, 错误信息: ${err.message}`);
    }
});
