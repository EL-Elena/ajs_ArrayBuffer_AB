import getBuffer from '../index';

const correct = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

test('Checking function getBuffer', () => {
  expect(String.fromCharCode.apply(null, new Uint16Array(getBuffer()))).toEqual(correct);
});
