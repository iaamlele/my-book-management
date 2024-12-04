import express from "express";
import { search_books_by_id, update_book_title_by_id } from "./service.js";

const app = express();
app.use(express.json());

// 根路径
app.get('/', (req, res) => {
    res.send('Welcome to the Book Management Service!');
  });

// 查询接口
app.get("/getBookById", (req, res) => {
    const { id } = req.query;
    const book = search_books_by_id(parseInt(id));
    console.log("查询到的书籍:", book);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found." });
    }
});

// 更新接口
app.post("/updateBookById", (req, res) => {
    const { id, newName } = req.body;
    console.log('id:', id, 'newName:', newName);
    const result = update_book_title_by_id(parseInt(id), newName);
    if (result) {
        console.log('Update successful:', result);
        res.json(result);
    } else {
        console.log('Book not found for id:', id);
        res.status(404).json({ message: "Book not found." });
    }
});

// 启动服务
app.listen(3000, () => {
    console.log("Book management service is running on port 3000.");
});
