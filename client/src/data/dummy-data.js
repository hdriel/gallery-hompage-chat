import faker from 'faker';

export const IMAGES = new Array(100).fill('').map(_ => ({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(), // faker.lorem.words(2)
    author: faker.internet.userName(),
    description: faker.lorem.sentences(),
    uri: `${faker.image.imageUrl()}?random=${Math.round(Math.random() * 1000)}`,
}));


export const MESSAGES = new Array(100).fill('').map(_ =>
    ({ sender: faker.internet.userName(), message: faker.lorem.sentences() })
);
