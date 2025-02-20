"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Lớp User thực thi interface IUser
 */
class User {
    /**
     *  Khởi tạo đối tượng User
     * @param id  id người dùng
     * @param name tên người dùng
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.borrowed_books = [];
    }
    /**
     *  Mượn sách
     * @param book sách cần mượn
     */
    borrowBook(book) {
        /**
         * Mượn sách
         */
        book.borrow();
        /**
         * Thêm sách vào danh sách sách đã mượn
         */
        this.borrowed_books.push(book);
        console.log(`📚 ${this.name} đã mượn "${book.title}".`);
    }
    /**
     *  Trả sách
     * @param book sách cần trả
     */
    returnBook(book) {
        /**
         * Trả sách
         */
        book.return();
        /**
         * Xóa sách khỏi danh sách sách đã mượn
         */
        this.borrowed_books = this.borrowed_books.filter((b) => b !== book);
        console.log(`🔄 ${this.name} đã trả lại "${book.title}".`);
    }
}
exports.default = User;
