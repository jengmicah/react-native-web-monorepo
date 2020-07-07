# A React Native Web Monorepo using Expo

An [Expo](https://docs.expo.io/) monorepo boilerplate using [yarn workspaces](https://github.com/expo/expo/tree/master/packages/expo-yarn-workspaces) for creating [React](https://reactjs.org/docs/getting-started.html) and [React Native](https://reactnative.dev/docs/getting-started) apps that have potential for 95% code sharing. _This is currently only tested for Windows development environments._

## Features

- React Application: `/packages/web`
- React Native Application: `/packages/mobile`
- Shared Components: `/packages/common` (can contain the entire application ([`react-native-web`](https://github.com/necolas/react-native-web)) or just a few controllers, depending on the desired amount of code sharing)
- TypeScript (naturally)
- Live reload for both web and mobile devices

## Installation

- `git clone https://github.com/jengmicah/react-native-web-monorepo.git`
- `cd react-native-web-monorepo`
- `yarn`

- **Start Live Reload of Shared Components:** `cd ./packages/common && yarn watch`
- **Start React App:** `cd ./packages/web && yarn start`
- **Start React Native App:** `cd ./packages/mobile && yarn start`
