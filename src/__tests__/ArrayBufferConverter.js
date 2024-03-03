import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../index';

const correct = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

test('Checking class ArrayBufferConverter', () => {
  expect(ArrayBufferConverter.load(getBuffer())).toEqual(correct);
});
