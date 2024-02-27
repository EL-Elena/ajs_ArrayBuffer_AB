export default class ArrayBufferConverter {
  load(buffer) {
    this.converter = Buffer.from(buffer).toString();
    return this.converter;
  }
}
