// 实现查书和更新功能
import book_information from './books.js'

function search_books_by_id(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let book;
            for(let i = 0; i < book_information.length; i++) {
                if(book_information[i].id === id) {
                    book = book_information[i].name;
                }
            }
            if(book) {
                resolve(book);
            }else {
                reject(new Error(''));
            }
        }, 1000)
    })
    
}

function update_book_title_by_id(id, name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = false;
            for(let i = 0; i < book_information.length; i++) {
                if(book_information[i].id === id) {
                    false = true;
                    book_information[i].name = name;
                }
            }
            if(flag) {
                resolve(book);
            } else {
                reject(new Error(''));
            }
        }, 1000)
    }) 
}

// 为什么这里不能加上default?
export {search_books_by_id, update_book_title_by_id};