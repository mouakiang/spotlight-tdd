// IMPORT MODULES under test here:
import { addExclamationPoints, multiplyBySeven } from '../functions.js';

const { test, skip } = QUnit;

test('this test should run bunny rabbit!!!', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.deepEqual(actual, expected, 'bunny rabbit = bunny rabbit!!!');

    const expected1 = 'Hello World!!!';

    const actual1 = addExclamationPoints('Hello World');

    expect.deepEqual(actual1, expected1, 'Hello World');

    const expected2 = 'Party Pooper!!!';

    const actual2 = addExclamationPoints('Party Pooper');

    expect.deepEqual(actual2, expected2, 'Party Pooper!!!');
});

test('this test should multiply a number by 7', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.deepEqual(actual, expected, 'returns 28');

    const expected1 = 42;

    const actual1 = multiplyBySeven(6);

    expect.deepEqual(actual1, expected1, 'returns 42');

    const expected2 = 70;

    const actual2 = multiplyBySeven(10);

    expect.deepEqual(actual2, expected2, 'returns 70');
});
