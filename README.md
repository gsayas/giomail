# Welcome to GioMail :D !!!

## Pre-requisites

* Install and use Node 20 or above
```
nvm use 20
```

## To check the app

1. Clone the repo
2. Install the dependencies
3. Initialize the database

```shellscript
npx prisma migrate dev
```

Then run the dev server
```shellscript
npm run dev
```

## To run the tests

```shellscript
npm run test
```

## To run the e2e tests

```shellscript
npm run dev & npm run e2e
```


# Testing Strategy
- In general I like to use Jest + React Testing Library for components and hooks, especially the parent components (EmailList.ts in this case). I usually use Cypress for critical flows and pages.
- If the backend starts to get complex, I would also add integration and unit tests for the useCases and the domain (business rules).
Since this app is just a CRUD without much business logic, I didn't give them much priority. Also because the E2E tests are actually going all the way reaching the database.
- In [this other repo](https://github.com/gsayas/example-node-backend/blob/main/src/test/payForJobUseCase.test.js) you can find more examples of the testing strategy I usually follow
- In a real scenario I would also consider testing loaders and actions separately as described [here](https://sergiodxa.com/tutorials/test-remix-loaders-and-actions)


# Notes
- I used Remix for the first time, I found it quite interesting and enjoyed learning it on the fly. I'm sure there are better ways to do things, but I tried to follow the best practices I found.
- I tried to use the useFetcher Remix hook for the api calls, but I had a transpiling issue that made it fail in the Jest tests. I decided to use the fetch API directly to avoid the issue.
- For bigger apps I would probably do a [Manual Route Configuration](https://remix.run/docs/fr/main/discussion/routes#manual-route-configuration) to have them in a more modular way.
- [IMPORTANT] I also stumbled onto this [React/Remix Hydration issue](https://github.com/remix-run/remix/issues/4822) that is currently open. I implemented one of the workarounds described in the ticket and the problem got better, but still it made some of the E2E tests fail intermittently. Not sure if it affects production environments, but maybe it's worth checking it out. 

## Screenshot

![img.png](img.png)