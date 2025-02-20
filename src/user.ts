import { IBorrowable, IUser } from "./interfaces";
/**
 * Lớp User thực thi interface IUser
 */
class User implements IUser {
  /**
   * ID người dùng
   */
  id: number;
  /**
   * Tên người dùng
   */
  name: string;
  /**
   * Danh sách sách đã mượn
   */
  borrowed_books: IBorrowable[];
  /**
   *  Khởi tạo đối tượng User
   * @param id  id người dùng
   * @param name tên người dùng
   */
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.borrowed_books = [];
  }
  /**
   *  Mượn sách
   * @param book sách cần mượn
   */
  borrowBook(book: IBorrowable) {
    /**
     * Mượn sách
     */
    book.borrow();
    /**
     * Thêm sách vào danh sách sách đã mượn
     */
    this.borrowed_books.push(book);
    console.log(`📚 ${this.name} đã mượn "${(book as any).title}".`);
  }
  /**
   *  Trả sách
   * @param book sách cần trả
   */
  returnBook(book: IBorrowable) {
    /**
     * Trả sách
     */
    book.return();
    /**
     * Xóa sách khỏi danh sách sách đã mượn
     */
    this.borrowed_books = this.borrowed_books.filter((b) => b !== book);
    console.log(`🔄 ${this.name} đã trả lại "${(book as any).title}".`);
  }
}

export default User;
