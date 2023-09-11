# BN JSON PLACEHOLDER PLAYGROUND

## Description: Just another pet project.

## Template used to create this application:

- ### cra-template-redux-typescript
- https://github.com/reduxjs/redux-templates/tree/master/packages/cra-template-redux-typescript#cra-template-redux-typescript

```sh
npx create-react-app my-app --template redux-typescript

# or

yarn create react-app my-app --template redux-typescript

```

## Features

- ## React Router

```sh
# install react-router-dom and its type definitions
npm install --save react-router-dom @types/react-router-dom
```

- ## Material UI

### Minimal ts config in `tsconfig.json`

```json
{
	"compilerOptions": {
		"lib": ["es6", "dom"],
		"noImplicitAny": true,
		"noImplicitThis": true,
		"strictNullChecks": true
	}
}
```

### Default installation

```sh
# Run one of the following commands to add Material UI to your project:
npm install @mui/material @emotion/react @emotion/styled

yarn add @mui/material @emotion/react @emotion/styled

pnpm add @mui/material @emotion/react @emotion/styled

```

### Roboto font

```sh
# Material UI uses the Roboto font by default. Add it to your project via Fontsource
npm install @fontsource/roboto

```

import it in index.tsx

```tsx
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

### Icons

```sh
# To use the font Icon component or the prebuilt SVG Material Icons (such as those found in the icon demos), you must first install the Material Icons font.
npm install @mui/icons-material

yarn add @mui/icons-material

pnpm add @mui/icons-material
```

- ## Axios

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
