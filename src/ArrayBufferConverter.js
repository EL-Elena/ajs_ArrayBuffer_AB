export default class ArrayBufferConverter {
  static load(buffer) {
    return String.fromCharCode.apply(null, new Uint16Array(buffer));
  }
}
