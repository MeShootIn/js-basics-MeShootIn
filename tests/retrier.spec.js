import retrier from '../homework/retrier';

describe('retrier', () => {
  let log = [];
  let errorLog = [];

  beforeEach(() => {
    log = [];
    errorLog = [];
  })

  it('retries', () => {
    const fail = () => {
      log.push(1);
      throw new Error(2);
    }

    try {
      retrier(fail, 2);
    } catch (e) {
      errorLog.push(e)
    };
    
    expect(log).toEqual([1, 1]);
    expect(errorLog).toEqual([new Error(2)]);
  });

  it('retries until success', () => {
    let n = 4;

    const fail = () => {
      log.push(n);

      if (n > 0) {
        n--;
        throw new Error(2);
      }
    }

    try {
      retrier(fail, 6);
    } catch (e) {
      errorLog.push(e)
    };
    
    expect(log).toEqual([4, 3, 2, 1, 0]);
    expect(errorLog).toEqual([]);
  })
});
