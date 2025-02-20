/**
 * Tạo interface cho các đối tượng trong ứng dụng
 */
export interface IBorrowable {
  /**
   * Phương thức mượn sách
   */
  borrow(): void;
  /**
   * Phương thức trả sách
   */
  return(): void;
}
/**
 * Interface cho đối tượng sách
 */
export interface IUser {
  /**
   * ID người dùng
   */
  id: number;
  /**
   * Tên người dùng
   */
  name: string;
  /**
   *  Mượn sách
   * @param book
   */
  borrowBook(book: IBorrowable): void;
  /**
   *  Trả sách
   * @param book
   */
  returnBook(book: IBorrowable): void;
}
