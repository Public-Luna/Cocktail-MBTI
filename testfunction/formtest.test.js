const next = require('../public/javascripts/formtest');

describe('ans값에 대한 유효성 검증', () => {
  test('ans=0', () => {
    expect(next(0)).toBe(0);
  });
  test('ans=1', () => {
    expect(next(1)).toBe(1);
  });

  test('0 or 1 이외의 숫자', () => {
    expect(next(3)).toBe('error');
  });
  test('문자', () => {
    expect(next('메롱메롱')).toBe('error');
  });
});
  