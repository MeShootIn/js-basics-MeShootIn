import rle from '../homework/rle';

describe('RLE', () => {
  it('create rle sequence', () => {
    expect(rle('BCCDDDEEEE')).toBe('BC2D3E4');
    expect(rle('AAAB')).toBe('A3B');
    expect(rle('LLLKKFJJJJJJJJJDDDDDSSKQQQNNAAAAAGG')).toBe('L3K2FJ9D5S2KQ3N2A5G2');
    expect(rle('HELLOWORLD')).toBe('HEL2OWORLD');
    expect(rle('PARSELTANGSSSSHHHHHSSSSHHHHHSHHHH')).toBe('PARSELTANGS4H5S4H5SH4');
  });
});
