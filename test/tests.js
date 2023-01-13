// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    divideThenMultiply,
    getSecondItem,
    makeLuckyGreeting,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    returnAsAnArray,
    returnAsAString,
} from '../functions.js';

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

test('this test should multiply by 12 and then divide in half', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.deepEqual(actual, expected, 'returns 24');

    const expected1 = 30;

    const actual1 = multiplyBy12ThenHalve(5);

    expect.deepEqual(actual1, expected1, 'returns 30');

    const expected2 = 36;

    const actual2 = multiplyBy12ThenHalve(6);

    expect.deepEqual(actual2, expected2, 'returns 36');
});

test('this test should divide the first and second number and multiply by the third number', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.deepEqual(actual, expected, '8/ 4* 5 = 10');

    const expected1 = 25;

    const actual1 = divideThenMultiply(10, 2, 5);

    expect.deepEqual(actual1, expected1, '10 / 2 * 5 = 25');

    const expected2 = 35;

    const actual2 = divideThenMultiply(15, 3, 7);

    expect.deepEqual(actual2, expected2, '15 / 3 * 7');
});

test('this test should take three numbers and return them in an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected, '8, 4, 5 = [8, 4, 5]');

    const expected1 = [8, 9, 10];

    const actual1 = returnAsAnArray(8, 9, 10);

    expect.deepEqual(actual1, expected1, '8, 9, 10 = [8, 9, 10]');

    const expected2 = [11, 12, 13];

    const actual2 = returnAsAnArray(11, 12, 13);

    expect.deepEqual(actual2, expected2, '11, 12, 13 = [11, 12, 13]');
});

test('this test should take three numbers and return those numbers mushed together', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.deepEqual(actual, expected, '8, 4, 5 = 845');

    const expected1 = '123';

    const actual1 = returnAsAString(1, 2, 3);

    expect.deepEqual(actual1, expected1, '1, 2, 3 = 123');

    const expected2 = '456';

    const actual2 = returnAsAString(4, 5, 6);

    expect.deepEqual(actual2, expected2, '4, 5, 6 = 456');
});

test('this test should take two numbers and return todays lucky number in a greeting', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12';

    const actual = makeLuckyGreeting(8, 4);

    expect.deepEqual(actual, expected, '8 + 4 = Hello! Your lucky number for the day is 12');

    const expected1 = 'Hello! Your lucky number for the day is 14';

    const actual1 = makeLuckyGreeting(9, 5);

    expect.deepEqual(actual1, expected1, '9 + 5 = Hello! Your lucky number for the day is 14');

    const expected2 = 'Hello! Your lucky number for the day is 15';

    const actual2 = makeLuckyGreeting(10, 5);

    expect.deepEqual(actual2, expected2, '10 + 5 = Hello! Your lucky number for the day is 15');
});

test('this test should take an array and return the second item in the array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected, 'kiwi, apple, orange, plum = apple');

    const expected1 = 'blue';

    const actual1 = getSecondItem(['orange', 'blue', 'red', 'pink']);

    expect.deepEqual(actual1, expected1, 'orange, blue, red, pink = blue');

    const expected2 = '1';

    const actual2 = getSecondItem(['0', '1', '2', '3']);

    expect.deepEqual(actual2, expected2, '0, 1, 2, 3 = 1');
});
