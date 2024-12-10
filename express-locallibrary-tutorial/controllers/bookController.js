const book_information = require("../data/books");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");


exports.index = asyncHandler(async (req, res, next) => {
    const numBooks = await Promise.all([
        book_information.length
    ]);
    
    res.render("index", {
        title: "Local Library Home",
        book_count: numBooks
    })
});

// 查询所有的图书
exports.book_list = asyncHandler(async (req, res, next) => {
    res.send("未实现：图书列表");
});

// 通过 GET 显示更新图书。
exports.book_update_get = asyncHandler(async (req, res, next) => {
    async.parallel(
        {
            bookid: () => {
                book_information.forEach(elem => {
                    elem.id;
                })
            },
            bookname: () => {
                book_information.forEach(elem => {
                    elem.name;
                })
            }
        },
        function(err, results) {
            if(err) {
                return next(err);
            }
            if(results.bookid === null) {
                var err = new Error('Book not found');
                err.status = 404;
                return next(err);
            }
            res.render('book_form', {
                title: 'Update Book',
                book_id: results.id,
                book_name: results.name
            })
        }
    )
});
  
// 处理 POST 时的更新图书。
exports.book_update_post = asyncHandler(async (req, res, next) => {
    res.send("未实现：更新图书 POST");
});
