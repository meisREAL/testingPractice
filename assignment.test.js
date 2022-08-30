import { capitalize } from './assignment'

test('capitalize first character', () => {
    expect(capitalize('jurgis')).toBe('Jurgis');
});