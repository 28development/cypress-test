## Used technologies (bootstrapped)

- [React / Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Additional technologies / tools

- [vitest](https://vitest.dev/)
- [cypress](https://www.cypress.io)
- [cockroachdb](https://www.cockroachlabs.com/)

## cypress -> e2e tests

Cypress was utilized in this project as an end-to-end testing framework, allowing for the creation of automated tests that simulate user interactions and provide a high level of confidence in the stability and reliability of the application. Playwright was not used since the developer experience using Cypress overweights the test performance using Playwright.

Before starting the e2e test you should start the actual application using `pnpm dev`. The application should furthermore ran on port 3000.
If that port is already taken make sure to update your specific port in the config file `cypress.config.ts`, like this:

```
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // -> This port should be updated if it is already in use
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
```

Cypress or more specific the e2e can be started using `pnpm cy:open`, that command opens the cypress ui, from there you can select "E2E Testing" then Chrome and click on "Start E2E testing in Chrome". The new window should show the e2e test file `spec.cy.ts`, if you click on that, it automatically runs the current e2e tests.

## Vitest -> Units tests

I decided to use Vitest, for unit testing in this project rather than Jest. One of the main reasons for this decision was that Vite's setup for testing is simpler and more streamlined than Jest's, making it easier to get started with testing quickly. Additionally, Vite's testing framework is optimized for fast feedback, which allowed me to iterate on my tests more quickly and with greater confidence in their reliability. Overall, I found that Vite's testing framework was a better fit for my project's needs and provided a more efficient and enjoyable testing experience than Jest.

To run the unit test you can run following command: `pnpm run test`, which also automatically has a watch feature.

## How to run the application

- Clone Repo
- Run `pnpm install`
- Run `cp .env.example .env`
- Copy the database url, in the .env file. I probably sent you that via email:
  DATABASE_URL="CONNECTION_STRING_FROM_EMAIL"
- Run `nvm current`, or manually change the node version to 18.14 `18.14.2`, the app was built on that version (other version should work aswell most likely)
- Run `pnpm dev`

## Cypress VS Selenium

- Architecture: Cypress runs directly in the browser and has access to everything happening in real time. This means it can understand everything happening in the application synchronously. Selenium, on the other hand, runs outside the browser and operates via network calls, which can lead to timing issues and less reliable tests.

- Ease of Setup: Setting up Cypress is easier compared to Selenium. Cypress is a JavaScript-based tool and you only need to install it via npm to get started. Selenium, however, requires a separate WebDriver and language bindings setup, which can make getting started a bit more complex.

- Automatic Waiting: Cypress automatically waits for commands and assertions before moving on. You don't need to manually add waits or sleeps to your tests. Selenium, on the other hand, often requires explicit waits to be added to your test scripts, which can be difficult to get right and make your tests flaky.

- Real-time Reloads: Cypress automatically reloads whenever you make changes to your tests. This feature can make your test development process more efficient.

- Debuggability: Cypress provides better error messages and has built-in tools for taking screenshots and videos, making it easier to debug failing tests. Selenium's debugging capabilities are comparatively less user-friendly.

- Network Traffic Control: Cypress can control and alter any network request coming out of your application. This ability is useful for testing different scenarios and edge cases. While Selenium can also handle network traffic, it requires third-party tools and is less straightforward to use.

- Consistent Results: Because of its architecture and features like automatic waiting, Cypress tends to produce more consistent results and fewer flaky tests compared to Selenium.
