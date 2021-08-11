const assert = require('chai').assert;

const tail = require('../tail');


describe("#tail", () => {
  it('it should return 2 for length', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  })
  it('it should return Labbers at index [0]', () => {
    const result = tail(["Hello", "Labbers", "at","Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Labbers");
  })
  it('it should return Lighthouse for index[2]', () => {
    const result = tail(["Hello", "Labbers", "at","Lighthouse", "Labs"]);
    assert.strictEqual(result[2], "Lighthouse");
  })
})
