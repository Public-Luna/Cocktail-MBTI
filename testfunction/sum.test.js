const sum = require('../public/javascripts/sum');
const postData = [];
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
//
//
//given, when, then 단계에 따라 작성한다.
//

test('ans값에 대한 유효성 검증', () => {

    expect(next(1, 2)).toBe('제대로 입력이 됩니다.');
  });

  