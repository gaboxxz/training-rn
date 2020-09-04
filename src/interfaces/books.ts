export interface Book {
  id?: number;
  author: string;
  title: string;
  genre?: string;
  publisher?: string;
  year?: string;
  imageUrl?: string;
}

export interface BookComment {
  id?: number;
  bookId?: number;
  author?: string;
  gender?: 'M' | 'F';
  text: string;
  date: Date;
}
