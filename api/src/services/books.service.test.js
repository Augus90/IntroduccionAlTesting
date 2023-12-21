const BooksService = require('./books.service');

// create a fake book
const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

// Create a fake BookService instance that will be used to manage the books collection
const mongoLobStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

// Mock a library for testing responses from the server
jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => mongoLobStub));

describe('Test for boocksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.cleatAllMocks();
  });

  describe('test for getBooks', () => {
    test('Should return a list of books', async () => {
      const books = await service.getBooks();
      // Assert
      expect(books.length).toEqual(1);
    }); // Act
    test('Should return the name of the first book', async () => {
      const books = await service.getBooks();

      expect(books[0].name).toEqual('Harry Potter');
    });
  });
});
