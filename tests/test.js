const sl = require('../src/index')
test('Sanity check', () => {
    expect(2+2).toBe(4)
})
test('Capitalize', () => {
    expect(sl.capitalize('test')).toBe('Test')
})