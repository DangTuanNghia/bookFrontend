import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:9000";

class BookService {

    static getAllBook() {
        return axios.get(BOOK_API_BASE_URL);
    }

    static deleteBook(id) {
        return axios.delete(BOOK_API_BASE_URL + '/delete/'+id);
    }

    static getBookById(id) {
        return axios.get(BOOK_API_BASE_URL + '/book/' + id);
    }

    static createBook(book) {
      return axios.post(BOOK_API_BASE_URL+ '/create', book)
    }

    static updateBook(book, id) {
        return axios.put(BOOK_API_BASE_URL + '/update/' +id, book);
    }
}

export default BookService
