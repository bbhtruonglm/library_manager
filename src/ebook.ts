import Book from "./book";
/**
 * Lớp EBook kế thừa từ lớp Book
 */
class EBook extends Book {
  /**
   * Dung lượng file
   */
  file_size: number;
  /**
   *  Khởi tạo đối tượng EBook
   * @param id  id sách
   * @param title tiêu đề sách
   * @param author tác giả sách
   * @param file_size dung lượng file
   */
  constructor(id: number, title: string, author: string, file_size: number) {
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

export default EBook;
