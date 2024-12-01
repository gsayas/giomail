module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: [`<rootDir>/jest.setup.tsx`],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    testURL: `http://localhost`,
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    moduleNameMapper: {
        "^~(.*)$": "<rootDir>/app/$1"
    }
};
