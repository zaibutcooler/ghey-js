import { dummyDemo } from '../src';

describe('index', () => {
  describe('dummyDemo', () => {
    it('should return a string containing the message', () => {

      const result = dummyDemo();

      expect(result).toMatch("Why are you ghey");
    });
  });
});
