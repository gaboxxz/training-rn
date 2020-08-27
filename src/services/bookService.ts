import { Book, BookComment } from '@interfaces/books';

export const bookList: Array<Book> = [
  {
    id: 1,
    author: 'Emmie Thiel',
    title: 'Ring of Bright Water and the text is really long',
    genre: 'Short story',
    publisher: 'Butterworth-Heinemann',
    year: '1968'
  },
  {
    id: 2,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'other',
    publisher: 'Pocket Books',
    year: '1989'
  },
  {
    id: 3,
    author: 'Lois Duncan',
    title: 'Locked in time',
    genre: 'suspense',
    publisher: 'Little, Brown',
    year: '1985',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg'
  },
  {
    id: 4,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'suspense',
    publisher: 'Pocket Books',
    year: '1989',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg'
  },
  {
    id: 5,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'suspense',
    publisher: 'Pocket Books',
    year: '1989',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg'
  },
  {
    id: 6,
    author: 'Paula Hawkins',
    title: 'The Girl on the Train\n',
    genre: 'suspense',
    publisher: 'Riverhead Books',
    year: '2015',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg'
  },
  {
    id: 7,
    author: 'Anthony Doerr',
    title: 'All the Light We Cannot See',
    genre: 'suspense',
    publisher: 'Scribner',
    year: '2014',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg'
  },
  {
    id: 8,
    author: 'John Katzenbach',
    title: 'The analyst',
    genre: 'thriller',
    publisher: 'Ballantine Books',
    year: '2003',
    imageUrl:
      'http://wolox-training.s3.amazonaws.com/uploads/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg'
  },
  {
    id: 9,
    author: 'Andy Weir',
    title: 'The Martian',
    genre: 'fiction',
    publisher: 'Crown Publishing Group',
    year: '2011',
    imageUrl: 'http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg'
  }
];

export const bookCommentList: Array<BookComment> = [
  {
    id: 1,
    author: 'Juan Topo',
    gender: 'M',
    text:
      'It is a great book, perfect for a rainy day and a good coffe. Will give it as a christmas present.',
    date: new Date('02/02/2020')
  },
  {
    id: 2,
    author: 'Edna Krabappel',
    gender: 'F',
    text: 'Hated it. Worst book ever. My students also hated it. Bart did`t even finished it.',
    date: new Date('02/02/2020')
  },
  {
    id: 3,
    author: 'Nelsol Montz',
    gender: 'M',
    text: 'My teacher gave it to us as homework. Did not read it, used it to set a fire.',
    date: new Date('02/02/2020')
  },
  {
    id: 4,
    author: 'Lisa Simpson',
    gender: 'F',
    text:
      'Loved it. Best book ever. The whole book was a big riddle, with a shocking ending. My favourite character was the wizzard.',
    date: new Date('02/02/2020')
  },
  {
    id: 5,
    author: 'Homer Simpson',
    gender: 'M',
    text: 'What is this? I want a big burger, with fries and 5 beers. ',
    date: new Date('02/02/2020')
  },
  {
    id: 6,
    author: 'Marge Simpson',
    gender: 'F',
    text: 'Nicesest book ever. Will use it for our book group.',
    date: new Date('02/02/2020')
  }
];
