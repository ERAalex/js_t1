import orderByProps from '../src/tableProps.js';
const { obj } = require('../src/tableProps');

test('Sorting will fale if incorrect items in Array', () => {
    const arraySort = ["name", "level"];
    expect(orderByProps(obj, arraySort)).toBe(["name", "level", "attack", "defence", "health"]);
});




