"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LibraryManager {
    constructor() {
        this.books = [];
        this.users = [];
    }
    static getInstance() {
        if (!LibraryManager.instance) {
            LibraryManager.instance = new LibraryManager();
        }
        return LibraryManager.instance;
    }
    addBook(book) {
        this.books.push(book);
        console.log(`📘 Đã thêm sách: "${book.title}" của ${book.author}`);
    }
    addUser(user) {
        this.users.push(user);
        console.log(`👤 Người dùng mới: ${user.name}`);
    }
    listBooks() {
        console.log("📚 Danh sách sách trong thư viện:");
        this.books.forEach((book) => console.log(`- ${book.title} của ${book.author} [${book.is_available ? "Có sẵn" : "Đã mượn"}]`));
    }
    findBook(title) {
        return this.books.find((book) => book.title === title);
    }
    findUser(name) {
        return this.users.find((user) => user.name === name);
    }
}
exports.default = LibraryManager;
