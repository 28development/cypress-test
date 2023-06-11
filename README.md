## Used technologies (bootstrapped)

- [React / Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Additional technologies / tools

- [vitest](https://vitest.dev/)
- [cypress](https://www.cypress.io)
- [cockroachdb](https://www.cockroachlabs.com/)

## Prisma

Prisma was chosen as the ORM for this project because it offers a type-safe and intuitive API for interacting with databases, while also providing powerful features such as schema migrations and data modeling tools, allowing for a more efficient and streamlined database development process.

## Tailwind

Tailwind CSS was utilized in this project as a utility-first CSS framework, providing a highly customizable and efficient way to style UI components.
Using Tailwind CSS I could generate a proper UI within minutes and did not have to waste time to think about minor things like, naming elements with proper classnames.
Also tailwind supports treeshaking, which eliminates not used classes. If the application grows and has a design system (branding guideline), that can be easily defined in the tailwind.config file aswell.

## TRPC

Trpc is a framework for building type-safe and efficient RPC (remote procedure call) APIs in TypeScript, allowing for seamless communication between client and server applications. It offers features such as automatic code generation.

## Database

Instead of creating something like a docker image I decided to just create a free db instance using [cockroachdb](https://www.cockroachlabs.com/) to scaffold and test this application faster.
You can paste your own connection string or just use mine (probably shared via email).
CockroachDB was chosen for this project due to its distributed architecture, which provides high availability and scalability (scales horizontally).

Since there may be the possibility that the application may need backend procedures such as adding, mutating or deleting data,
I added a database and and api instead of static data such as a json file which could be used as a single source of truth regarding the data aswell.

## Seeder

A seeder has been used to populate the database with static data and simulate a fetch request, as a means of ensuring a consistent and reliable testing environment.

The seeder can be found inside `prisma/seed.ts`.

The seeder can be ran using following command `pnpm run prisma seed`.
(Since the current prod database already contains this data one does not need this script to run again)

## TypeScript

TypeScript was used in this project to help catch potential errors early in the development process, improve code maintainability, and provide better editor support through the use of static typing.

## Frontend -> React / Next.js

I used Typescript with React and Next.js to make my code more reliable and easier to maintain as my frontend technology stack. React allows for the creation of reusable and modular components, which simplifies the development process and promotes code reuse.

Next.js offers benefits such as server-side rendering, automatic code splitting, and built-in API routes, which can improve overall application performance and reduce development time. Also Next.js includes a built-in routing system, which simplifies the management of application routes and makes it easier to navigate between pages, which may be useful for future implementation requests.

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
