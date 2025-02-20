"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
/**
 * Lớp EBook kế thừa từ lớp Book
 */
class EBook extends book_1.default {
    /**
     *  Khởi tạo đối tượng EBook
     * @param id  id sách
     * @param title tiêu đề sách
     * @param author tác giả sách
     * @param file_size dung lượng file
     */
    constructor(id, title, author, file_size) {
        super(id, title, author);
        this.file_size = file_size;
    }
    /**
     * Phương thức tải xuống sách
     */
    download() {
        console.log(`📥 Đang tải xuống "${this.title}" (${this.file_size}MB)`);
    }
}
exports.default = EBook;
