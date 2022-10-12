const createBook = (title, author, isbn ) => ({ // creating a new object each time
  title,
  author,
  isbn
})

const book1 = createBook(
  'Harry Potter',
  'JK Rowling',
  'AB123',
);

const book2 = createBook(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  'CD456',
);

const book3 = createBook(
  'Moby-Dick',
  'Herman Melville',
  'EF789',
);

const book4 = createBook(
  'Harry Potter',
  'JK Rowling',
  'AB123',
);

const book5 = createBook(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  'CD456',
);
