import capitalize from '../homework/capitalize';

describe('Capitalize', () => {
  it('capitalizes correctly', () => {
    expect(capitalize('А роза упала на лапу Азора')).toBe('А Роза Упала На Лапу Азора');
    expect(capitalize('Use the force, Luke')).toBe('Use The Force, Luke');
    expect(capitalize('Что-то ты маловат для штурмовика.')).toBe('Что-то Ты Маловат Для Штурмовика.');
    expect(capitalize('Сэр, мне кажется этот астероид нестабилен.')).toBe('Сэр, Мне Кажется Этот Астероид Нестабилен.');
    expect(capitalize('Ваша самоуверенность — ваша слабость.')).toBe('Ваша Самоуверенность — Ваша Слабость.');
  });
});
