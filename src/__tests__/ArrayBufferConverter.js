import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../index';

const checkConverter = new ArrayBufferConverter();
const correct = {
  data: {
    user: {
      id: 1,
      name: 'Hitman',
      level: 10,
    },
  },
};

test('Checking class ArrayBufferConverter', () => {
  expect(checkConverter.load(getBuffer())).toEqual(correct);
});
