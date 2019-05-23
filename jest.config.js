module.exports = {
    rootDir: './',
    moduleFileExtensions: [
        'js',
        'json'
    ],
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
        '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    ],
    testURL: 'http://localhost/'
};
