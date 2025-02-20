import Book from "./book";
import EBook from "./ebook";
import User from "./user";
/**
 * Lớp quản lý thư viện
 */
class LibraryManager {
  /**
   * Tạo một instance của LibraryManager
   */
  private static instance: LibraryManager;
  /**
   * Danh sách sách trong thư viện
   */
  private books: Book[];
  /**
   * Danh sách người dùng
   */
  private users: User[];
  /**
   * Khởi tạo LibraryManager
   */
  private constructor() {
    this.books = [];
    this.users = [];
  }
  /**
   * Lấy instance của LibraryManager
   */
  static getInstance(): LibraryManager {
    /**
     * Nếu chưa có instance, tạo mới
     */
    if (!LibraryManager.instance) {
      /**
       * Tạo instance mới
       */
      LibraryManager.instance = new LibraryManager();
    }
    /**
     * Trả về instance
     */
    return LibraryManager.instance;
  }
  /**
   *  Thêm sách vào thư viện
   * @param book  sách cần thêm
   */
  addBook(book: Book) {
    /**
     * Thêm sách vào danh sách sách
     */
    this.books.push(book);
    console.log(`📘 Đã thêm sách: "${book.title}" của ${book.author}`);
  }
  /**
   * Thêm người dùng vào thư viện
   * @param user người dùng cần thêm
   */
  addUser(user: User) {
    this.users.push(user);
    console.log(`👤 Người dùng mới: ${user.name}`);
  }
  /**
   * Hiển thị danh sách sách trong thư viện
   */
  listBooks() {
    console.log("📚 Danh sách sách trong thư viện:");
    this.books.forEach((book) =>
      console.log(
        `- ${book.title} của ${book.author} [${
          book.is_available ? "Có sẵn" : "Đã mượn"
        }]`
      )
    );
  }
  /**
   *  Tìm sách trong thư viện theo tiêu đề
   * @param title  tiêu đề sách cần tìm
   * @returns
   */
  findBook(title: string): Book | undefined {
    return this.books.find((book) => book.title === title);
  }
  /**
   *  Tìm người dùng trong thư viện theo tên
   * @param name tên người dùng cần tìm
   * @returns
   */
  findUser(name: string): User | undefined {
    return this.users.find((user) => user.name === name);
  }
}

export default LibraryManager;
