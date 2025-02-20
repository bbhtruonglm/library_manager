import Book from "./book";
import EBook from "./ebook";
import LibraryManager from "./libraryManager";
import User from "./user";

/** Lấy instance của LibraryManager (Singleton) */
const LIBRARY = LibraryManager.getInstance();

/** Thêm sách vào thư viện */
const BOOK1 = new Book(1, "Dragon Ball", "Akira Toriyama");
/**
 * Thêm sách điện tử vào thư viện
 * @param 2: ID
 * @param "One Piece": Tên sách
 * @param "Oda": Tác giả
 * @param 5: Số lượt tải
 */
const E_BOOK1 = new EBook(2, "One Piece", "Oda", 5);

/**
 * Thêm sách vào thư viện
 */
LIBRARY.addBook(BOOK1);
/**
 * Thêm sách điện tử vào thư viện
 */
LIBRARY.addBook(E_BOOK1);

/** Thêm người dùng */
const TRUONG = new User(1, "TRUONG");
/**
 * Thêm người dùng vào thư viện
 */
LIBRARY.addUser(TRUONG);

/** Hiển thị sách trong thư viện */
LIBRARY.listBooks();

/** TRUONG mượn sách */
TRUONG.borrowBook(BOOK1);
TRUONG.borrowBook(E_BOOK1);

/** Hiển thị lại danh sách sách */
LIBRARY.listBooks();

/** TRUONG tải xuống EBook */
E_BOOK1.download();

/** TRUONG trả sách */
TRUONG.returnBook(BOOK1);

/** Hiển thị lại danh sách sách */
LIBRARY.listBooks();
