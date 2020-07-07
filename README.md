# React Native Web Monorepo

An expo monorepo boilerplate using yarn workspaces for creating React and React Native apps that have potential for 95% code sharing. _This is currently only tested for Windows development environments._

## Features

- React Application: `/packages/web`
- React Native Application: `/packages/mobile`
- Shared Components: `/packages/common` (can contain the entire application (`react-native-web`) or just a few controllers, depending on the desired amount of code sharing)
- TypeScript (naturally)
- Live reload for both web and mobile devices

## Installation

- `git clone https://github.com/jengmicah/react-native-web-monorepo.git`
- `cd react-native-web-monorepo`
- `yarn`

- **Start React App:** `cd ./packages/web && yarn start`
- **Start React Native App:** `cd ./packages/mobile && yarn start`
- **Start Live Reload of Shared Components:** `cd ./packages/common && yarn watch`
