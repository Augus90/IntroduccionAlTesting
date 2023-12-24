const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await database.dropDatabase();
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return "hello world"', async () => {
      // --Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'book1',
          year: 2000,
          author: 'John',
        },
        {
          name: 'book2',
          year: 2002,
          author: 'Dan',
        },
      ]);
      console.log(seedData);
      // --Act
      return (
        request(app)
          .get('/api/v1/books')
          .expect(200)
          // --Assert
          .then(({ body }) => expect(body.length).toEqual(seedData.insertedCount))
      );
      // Usando Async/await
      // const response = await request(app).get('/api/v1/books');
      //
      // expect(response.body.length).toEqual(fakeBooks.length);
    });
  });
});
