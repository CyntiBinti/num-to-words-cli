# Welcome!

I've created a node.js CLI Tool that converts a users number input into grammatically correct English words (within a range of 0 to 100,000).


## Getting started

Clone this repository to your machine.

### 1 - Install Globally

Run the below command to install the CLI tool globally (ie you can call the command from any directory on your computer's terminal). BUT, if you'd prefer to call this command within this projects directory only, then instead skip to step [2.b](#2b---if-not-globally-installed).

```sh
npm install -g .
```

### 2 - How to Use

#### 2.a - If Globally installed (NB: if this doesnt work then please proceed to step 2.b instead)

Type the following command in your terminal to run the CLI tool:

```sh
numbers-to-words 99999
```

#### 2.b - If NOT Globally Installed

Please note: if you did not install this CLI tool globally ([as per step 1 above](#1---install-globally)) then from the root directory of the project, run the following command in your terminal instead.

```sh
npx num-to-words-cli 99999
```

### 3 - Expected Result

```
ninety nine thousand, nine hundred and ninety-nine
```

### 4 - Run Tests

From the projects root directory, run the following command to execute the unit tests:

```sh
npm run test
```

### 5 - Functional & Non-Functional Requirements

I have addressed the following in my code:

| Done  | Requirement                       | Evidence                                       |
|-------|-----------------------------------|------------------------------------------------|
|  [x]  | Tests							    | [link](./tests/) & [screenshot](#screenshot-1)
|  [x]  | Documentation						| [link](./README.md)
|  [x]  | Error handling					| [link](./bin/numbers-to-words.js) & [link](./lib/utils.js)
|  [x]  | Use of exit codes 				| [link](./bin/numbers-to-words.js)

#### 5.a - Screenshots

#### Screenshot-1

![Screenshot of passing Jest tests](https://amz.run/6KtV)

------

![Screenshot of the CLI tool working](https://amz.run/6KuG)

------

### 6 - Reflections & Future Enhancements

I enjoyed the challenge of coding this, especially around:
- learning/researching how to build a CLI tool
- using functional programming and the right data structures, algorithms, and helper functions to ensure the code was clean, aspects of it were reusable, and reflected good software engineering principles
- using a TDD approach (i.e. I wrote my unit tests first and then from there I coded out the functionaility)

I feel my coding approach demonstrates extensibility as e.g.:
- tried to avoid using hard-coded text as part of the algorithms
- aimed for dynamic variables as much as possible, with readability in mind when naming them
- wrote loosely coupled code, so that functionality could be extended (rather than having to re-write blocks of code)
- wrote unit tests (I used a TDD approach)
- wrote pure functions, where I could (i.e. reusable blocks of code)
- tried to incorporate good software engineering principles e.g. D-R-Y, K-I-S-S, etc etc

Future Enhancements:
- refactor the code in `index.js` by abstracting out the helper function code blocks (when I tried moving them to the `utils.js` file, I would get a circular dependency error)
- add e.g. github actions as part of the CI/CD pipeline so that it can run various automated checks as part of the build
- install fun npm packages to add a cool UI to the CLI tool (to better enhance the users' experience) e.g. with *chalk* or *boxen*

I hope you enjoy using it!

Best wishes, 
Cynthia
