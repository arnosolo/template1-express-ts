## Github

https://github.com/arnosolo/template1-express-ts

## Docs

- [Eslint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/)
- [Lint staged](https://github.com/lint-staged/lint-staged)
- [How to Setup Node.js with TypeScript in 2023 | Beyond Fireship](https://youtu.be/H91aqUHn8sE?si=ENHQSZwGvLn3wz4-)

## Add jest

1. Install jest
```bash
npm i supertest jest ts-jest @types/jest @types/supertest -D
```

2. Add `jest.config.js` file
```bash
npx ts-jest config:init
```

3. Rename `jest.config.js` as `jest.config.cjs`
```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.ts'], // Test all files end with .test.ts
  verbose: true, // Print log of every test
  forceExit: true, // Always force exit test
};
```

3. Add test file `src/__tests__/app.test.ts`
```ts
import request from 'supertest'

describe('give a username and password', () => {
  test('should return true', async () => {
    expect(true).toBe(true)
  })
})
```

4. Add test cmd in `package.json`
```json
"test": "jest"
```

5. Run test
```bash
npm run test
```

- [Javascript Automated Testing](https://youtube.com/playlist?list=PL0X6fGhFFNTd5_wsAMasuLarx_VSkqYYX&si=20Caxew1UeSV-MxU)