const sampleData = [ { id: 1,
    name: 'require',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 1, column: 11 },
    end: { line: 1, column: 18 },
    scope: 'global' },
  { id: 2,
    name: 'banana',
    type: 'definition',
    filePath: './testFile1.js',
    start: { line: 3, column: 13 },
    end: { line: 10, column: 1 },
    scope: 'global' },
  { id: 3,
    name: 'apple',
    type: 'definition',
    filePath: './testFile1.js',
    start: { line: 5, column: 13 },
    end: { line: 7, column: 2 },
    scope: 'global=>0000000002' },
  { id: 4,
    name: 'apple',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 9, column: 1 },
    end: { line: 9, column: 6 },
    scope: 'global=>0000000002' },
  { id: 5,
    name: 'apple',
    type: 'definition',
    filePath: './testFile1.js',
    start: { line: 12, column: 0 },
    end: { line: 14, column: 1 },
    scope: 'global' },
  { id: 6,
    name: 'fruit',
    type: 'definition',
    filePath: './testFile1.js',
    start: { line: 17, column: 8 },
    end: { line: 17, column: 20 },
    scope: 'global' },
  { id: 7,
    name: 'cake',
    type: 'definition',
    filePath: './testFile1.js',
    start: { line: 20, column: 11 },
    end: { line: 30, column: 1 },
    scope: 'global',
    object: 'obj' },
  { id: 8,
    name: 'apple',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 22, column: 1 },
    end: { line: 22, column: 6 },
    scope: 'global=>0000000007' },
  { id: 9,
    name: 'banana',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 23, column: 1 },
    end: { line: 23, column: 7 },
    scope: 'global=>0000000007' },
  { id: 10,
    name: '(anonymous)',
    type: 'definition',
    filePath: './testFile1.js',
    start: { line: 24, column: 8 },
    end: { line: 28, column: 2 },
    scope: 'global=>0000000007' },
  { id: 11,
    name: 'apple',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 26, column: 2 },
    end: { line: 26, column: 7 },
    scope: 'global=>0000000007=>0000000010' },
  { id: 12,
    name: 'duck',
    type: 'definition',
    filePath: './testFile1.js',
    start: { line: 32, column: 7 },
    end: { line: 39, column: 1 },
    scope: 'global' },
  { id: 13,
    name: 'cake',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 34, column: 1 },
    end: { line: 34, column: 11 },
    scope: 'global=>0000000012',
    object: 'obj' },
  { id: 14,
    name: '(anonymous)',
    type: 'definition',
    filePath: './testFile1.js',
    start: { line: 36, column: 8 },
    end: { line: 38, column: 2 },
    scope: 'global=>0000000012' },
  { id: 15,
    name: 'apple',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 41, column: 0 },
    end: { line: 41, column: 5 },
    scope: 'global' },
  { id: 16,
    name: '(anonymous)',
    type: 'definition',
    filePath: './testFile1.js',
    start: { line: 41, column: 6 },
    end: { line: 41, column: 19 },
    scope: 'global' },
  { id: 17,
    name: '(anonymous)',
    type: 'definition',
    filePath: './testFile1.js',
    start: { line: 41, column: 21 },
    end: { line: 41, column: 33 },
    scope: 'global' },
  { id: 18,
    name: 'cake',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 43, column: 0 },
    end: { line: 43, column: 10 },
    scope: 'global',
    object: 'obj' },
  { id: 19,
    name: 'apple',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 45, column: 0 },
    end: { line: 45, column: 5 },
    scope: 'global' },
  { id: 20,
    name: 'apple',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 47, column: 6 },
    end: { line: 47, column: 11 },
    scope: 'global' },
  { id: 21,
    name: '(anonymous)',
    type: 'definition',
    filePath: './testFile1.js',
    start: { line: 49, column: 0 },
    end: { line: 49, column: 13 },
    scope: 'global' },
  { id: 22,
    name: 'require',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 51, column: 11 },
    end: { line: 51, column: 18 },
    scope: 'global' },
  { id: 23,
    name: 'require',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 52, column: 11 },
    end: { line: 52, column: 18 },
    scope: 'global' },
  { id: 24,
    name: 'require',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 53, column: 11 },
    end: { line: 53, column: 18 },
    scope: 'global' },
  { id: 25,
    name: 'mod2',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 55, column: 0 },
    end: { line: 55, column: 4 },
    scope: 'global' },
  { id: 26,
    name: 'mod3',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 56, column: 0 },
    end: { line: 56, column: 4 },
    scope: 'global' },
  { id: 27,
    name: 'func',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 57, column: 0 },
    end: { line: 57, column: 11 },
    scope: 'global',
    object: 'mod4' },
  { id: 28,
    name: 'func',
    type: 'invocation',
    filePath: './testFile1.js',
    start: { line: 58, column: 0 },
    end: { line: 58, column: 11 },
    scope: 'global',
    object: 'mod5' },
  { id: 29,
    name: 'exports',
    type: 'definition',
    filePath: './testFile2.js',
    start: { line: 1, column: 17 },
    end: { line: 3, column: 1 },
    scope: 'global',
    object: 'module' },
  { id: 30,
    name: 'func',
    type: 'definition',
    filePath: './testFile3.js',
    start: { line: 1, column: 11 },
    end: { line: 1, column: 23 },
    scope: 'global' },
  { id: 31,
    name: 'func',
    type: 'definition',
    filePath: './testFile4.js',
    start: { line: 1, column: 11 },
    end: { line: 1, column: 23 },
    scope: 'global' },
  { id: 32,
    name: 'func',
    type: 'definition',
    filePath: './testFile5.js',
    start: { line: 2, column: 11 },
    end: { line: 2, column: 23 },
    scope: 'global',
    object: 'obj' } ]

export default sampleData;