const { generateManyBook } = require('../fakes/book.fake');
const BooksService = require('./books.service');

// create a fake book
// const fakeBooks = [
//   {
//     _id: 1,
//     name: 'Harry Potter',
//   },
// ];

// create a fake spy
const mockGetAll = jest.fn();

// Create a fake BookService instance that will be used to manage the books collection
const mongoLobStub = {
  // This way we can easily mock the service with data that we generate
  // getAll: () => [...fakeBooks],

  // This way we spy on the service with generated data
  getAll: mockGetAll,

  create: () => {},
};

// Mock a library for testing responses from the server
// jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => mongoLobStub));
jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({ getAll: mockGetAll, create: () => {} })));

describe('Test for boocksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('Should return a list of books', async () => {
      // -- Arrange - the spy to return a list of books
      // mockResultValue is a function that returns a mock data
      // mockResolveValue will return a promise that resolves to a list of books
      // we need this, because getBooks is a async function
      const fakeBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);

      // -- Act
      const books = await service.getBooks({});
      // -- Assert
      expect(books.length).toEqual(fakeBooks.length);
      // spy if the function has been called
      expect(mockGetAll).toHaveBeenCalled();
      // spy if the function has been called with the parameters passed in the arguments
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
    test('Should return the name of the first book', async () => {
      // ---Arrange
      // const books = await service.getBooks();
      const fakeBooks = generateManyBook(4);
      mockGetAll.mockResolvedValue(fakeBooks);

      // -- Act
      const books = await service.getBooks({});

      // -- Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
