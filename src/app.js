"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
const ebook_1 = __importDefault(require("./ebook"));
const libraryManager_1 = __importDefault(require("./libraryManager"));
const user_1 = __importDefault(require("./user"));
/** Lấy instance của LibraryManager (Singleton) */
const LIBRARY = libraryManager_1.default.getInstance();
/** Thêm sách vào thư viện */
const BOOK1 = new book_1.default(1, "Harry Potter", "J.K. Rowling");
const E_BOOK1 = new ebook_1.default(2, "The Hobbit", "J.R.R. Tolkien", 5);
LIBRARY.addBook(BOOK1);
LIBRARY.addBook(E_BOOK1);
/** Thêm người dùng */
const TRUONG = new user_1.default(1, "Alice");
LIBRARY.addUser(TRUONG);
/** Hiển thị sách trong thư viện */
LIBRARY.listBooks();
/** Alice mượn sách */
TRUONG.borrowBook(BOOK1);
TRUONG.borrowBook(E_BOOK1);
/** Hiển thị lại danh sách sách */
LIBRARY.listBooks();
/** Alice tải xuống EBook */
E_BOOK1.download();
/** Alice trả sách */
TRUONG.returnBook(BOOK1);
/** Hiển thị lại danh sách sách */
LIBRARY.listBooks();
