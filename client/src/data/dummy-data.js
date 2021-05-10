import faker from 'faker';

export const MESSAGES = new Array(100).fill('').map(_ =>
    ({ sender: faker.internet.userName(), message: faker.lorem.sentences() })
);
