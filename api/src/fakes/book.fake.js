const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBook = (size = 10) => {
  // const limit = size ?? 10;
  // const fakeBooks = [];
  // for (let i = 0; i < limit; i += 1) {
  //   fakeBooks.push(generateOneBook());
  // }

  const fakeBooks = new Array(size).fill({}).map(() => generateOneBook());

  return [...fakeBooks];
};

module.exports = { generateOneBook, generateManyBook };
