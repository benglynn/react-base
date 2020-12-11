# React base

React 17.0.1 basic TypeScript setup.

```bash
# bootstrapping
npx create-react-app react-base --template typescript
cd react-base
yarn add react-router-dom @types/react-router-dom
yarn add react-redux @reduxjs/toolkit @types/react-redux

yarn start # dev server
yarn test # test runner
yarn build # prod build to ./build
```

Bootstrapped with [Create React App][].

## One of many base repos

Base repos are common TypeScript framework (Angular, React,
Vue, Svelt...) set ups, using idiomatic solutions for
routing, state management and Material UI components. In
each, master is purely installation of dependencies, from
which specific apps or experiments may branch or fork.

[Create React App]: https://github.com/facebook/create-react-app