import { analyzeResponse } from './helper.js';
import { stubResponse } from './stubData/stubResponse';

describe('helper function tests', () => {
  it('should clean the data passed to it', () => {
    const dataToClean = stubResponse;
    const expectedOutput =
      [ { quantifier: 'mostly', emotion: 'neutral' },
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined ]

    expect(analyzeResponse(dataToClean)).toEqual(expectedOutput);
  })
})
