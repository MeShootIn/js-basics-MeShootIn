import passwordCheck from '../homework/passwordCheck';

describe('passwordCheck', () => {
  it('checks password', () => {
    expect(passwordCheck('Nagibator777')).toBe(false);
    expect(passwordCheck('password')).toBe(false);
    expect(passwordCheck('Bp^VfT9h')).toBe(false);
    expect(passwordCheck('SbGGstn6mQf7')).toBe(false);
    expect(passwordCheck('<+)saHz[6HX')).toBe(true);
    expect(passwordCheck('<+)saHz[6HX')).toBe(true);
    expect(passwordCheck('95-Yt$e&*d4u8E@vtUkP')).toBe(true);
    expect(passwordCheck('This is the 7th password I have come up with!')).toBe(true);
    expect(passwordCheck('qwertyuio12!+')).toBe(false);
  });
});
