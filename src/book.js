"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Lớp Book thực thi interface IBorrowable
 */
class Book {
    /**
     *  Khởi tạo đối tượng Book
     * @param id id sách
     * @param title tiêu đề sách
     * @param author tác giả sách
     */
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.is_available = true;
    }
    /**
     * Phương thức mượn sách
     */
    borrow() {
        /**
         * Kiểm tra sách có sẵn hay không
         */
        if (this.is_available) {
            /**
             * Đánh dấu sách đã được mượn
             */
            this.is_available = false;
            console.log(`📖 "${this.title}" đã được mượn.`);
        }
        else {
            console.log(`🚫 "${this.title}" không có sẵn.`);
        }
    }
    /**
     * Phương thức trả sách
     */
    return() {
        /**
         * Đánh dấu sách đã được trả lại
         */
        this.is_available = true;
        console.log(`✅ "${this.title}" đã được trả lại.`);
    }
}
exports.default = Book;
