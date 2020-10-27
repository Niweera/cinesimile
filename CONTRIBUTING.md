# Contribution Guidelines

Welcome to CineSimile! 📽️
CineSimile is an open source platform to find movie recommendations similar to a given movie. If you want to contribute to this project you can follow the following steps:

1. Fork and Clone the repository
2. Select an issue and work on it.
3. Create a Pull Request,

# I want to contribute, but how? 🤷‍♀

Contributing to CineSimile is simple. CineSimile is developed using ReactJS and IBM Carbon Design System. Following are the pre-requisites for making a contribution in the project:

### 1. Knowledge of basic ReactJS
   You can refer to [this link](https://reactjs.org/docs/getting-started.html).

### 2. Components and modular architecture of a React application.
   Don't get intimidated by the above line. It just means that you have to create seperate components in React and use them in various different places. If you know React you already know this, but you might not be quite familiar with it's terminology.😁 [This](https://www.simform.com/react-architecture-best-practices/) is a good place to get to know about React Architecture and it's best practices.

### 3. Basic knowledge of IBM Carbon Design System
   This is not exactly necessary. If you just know how to build a component in HTML, then that's all you need. However, IBM Carbon Design System is wonderful, and is worth learning. The following resources will be useful if you want to learn about it:

- https://www.carbondesignsystem.com/developing/react-tutorial/overview/
- https://www.carbondesignsystem.com/developing/get-started/
- https://github.com/carbon-design-system/carbon-tutorial/
- https://react.carbondesignsystem.com/

That's it! Now go and create something wonderful and send us a pull request.

## Additional information on developing ReactJS components

We are using the following component structure:

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

When contributing, you can create new React components inside `/src/components/<COMPONENT_NAME>/index.js`. It supports the core architecture of React and also the modularity of our application.

# I am stuck, what should I do? 🤷‍♂️

Fret not, my dear friends. We are here to help you. If you have any issue with the development or you need some advice, please feel free to open an issue and we will attend to it in no time. 😇

If you have any doubt like "WHY OPENSOURCE?!" -- open [this link](https://opensource.com/article/19/5/how-get-job-doing-open-source)!

Happy Coding! 🤩

# Additional resources

- [How to Contribute to Open Source](http://opensource.guide/how-to-contribute/)
- [FIRST TIMERS ONLY](https://www.firsttimersonly.com/)
- [AWESOME FOR BEGINNERS](https://github.com/mungell/awesome-for-beginners)
- [Useful Git Commands](https://github.com/joshnh/Git-Commands/blob/master/README.md)
- [GitHub Training Kit](https://training.github.com/)
