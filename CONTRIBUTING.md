# Contribution Guidelines

Welcome to CineSimile, an open source platform to find similar movies. If you want to contribute to this project you can follow the following steps.

1. Fork and Clone the repository
2. Select an issue and work on that issue
3. Create a Pull Request
4. That's it

# I want to contribute, but how 🤷‍♀️?

Contributing to CineSimile is simple. CineSimile is developed using ReactJS and IBM Carbon Design System. The following are the pre-requisites to contributing.

1. Knowledge of basic ReactJS
2. Components and modular architecture of a React application.

Don't get intimidated by above line. It means that you have to create seperate components in React and use those in other places. We all know this, but we are not quite familiar with the terminology 😁. [This](https://www.simform.com/react-architecture-best-practices/) is a good place to get to know about React Architecture and best practices.

3. Basic knowledge in IBM Carbon Design System
   This is not exactly necessary. If you just know how to build a component in HTML, that's all you need to know. However, IBM Carbon Design System is wonderful, it is worth learning. The following resources will be useful if you want to learn about it.

- https://www.carbondesignsystem.com/developing/react-tutorial/overview/
- https://www.carbondesignsystem.com/developing/get-started/
- https://github.com/carbon-design-system/carbon-tutorial/
- https://react.carbondesignsystem.com/

#### That's it. Now go do something wonderful and send us a pull request.

## Additional information on developing ReactJS components

We are using the following component structure.

```
project_root
│   README.md
│   CODE_OF_CONDUCT.md
|   CONTRIBUTING.md
|   LICENSE
|   package.json
│
└───src
│   │   App.js
│   │   routes.js
|   |   index.js
│   │
│   └───actions
|   └───helpers
|   └───components
|        |
|        └───Header
|        |     | index.js
|        |
|        └───Home
|              | index.js
│
└───node_modules/
|
└───public/
```

When contributing, you can create new React components inside `/src/components/<COMPONENT_NAME>/index.js`. It supports the core architecture of React and the modularity of our application.

# I am stuck, what should I do 🤷‍♂️?

Fret not my dear friends. We are here to help you. If you have any issue with the development or you need some advice, please feel free to open an issue and we will attend to it in no time. 😇

# Additional resources

- [How to Contribute to Open Source](http://opensource.guide/how-to-contribute/)
- [FIRST TIMERS ONLY](https://www.firsttimersonly.com/)
- [Useful Git Commands](https://github.com/joshnh/Git-Commands/blob/master/README.md)
