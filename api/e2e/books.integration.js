const request = require('supertest');

// create a fake spy
const mockGetAll = jest.fn();

const createApp = require('../src/app');

const { generateManyBook } = require('../src/fakes/book.fake');

jest.mock('../src/lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({ getAll: mockGetAll, create: () => {} })));

describe('Test for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return "hello world"', () => {
      // --Arrange
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // --Act
      return (
        request(app)
          .get('/api/v1/books')
          .expect(200)
          // --Assert
          .then(({ body }) => expect(body.length).toEqual(3))
      );
      // Usando Async/await
      // const response = await request(app).get('/api/v1/books');
      //
      // expect(response.body.length).toEqual(fakeBooks.length);
    });
  });
});
