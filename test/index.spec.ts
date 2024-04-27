import { dummyDemo } from '../src';

describe('index', () => {
  describe('dummyDemo', () => {
    it('should return a string containing the message', () => {
      const message = 'Hello';

      const result = dummyDemo(message);

      expect(result).toMatch(message);
    });
  });
});
