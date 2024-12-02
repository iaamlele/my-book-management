// 实现查书和更新功能
import book_information from './books.js'

function search_books_by_id(id) {
    for(let i = 0; i < book_information.length; i++) {
        if(book_information[i].id === id) {
            return book_information[i].name;
        }
    }
    return '查无此书';
}

function update_book_title_by_id(id, name) {
    for(let i = 0; i < book_information.length; i++) {
        if(book_information[i].id === id) {
            book_information[i].name = name;
            return name;
        }
    }
    return '查无此书';
}

export default {search_books_by_id, update_book_title_by_id};