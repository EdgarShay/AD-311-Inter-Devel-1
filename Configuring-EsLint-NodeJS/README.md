# ESLint Configuration Assignment

## Objective Gain hands-on experience in setting up and configuring ESLint in a Node.js project to ensure code consistency and avoid potential bugs.

---

## Project Setup

### 1. Initialize a New Node.js Project
- Created a new directory for the project.
- Navigated into the directory using the terminal.
- Ran `npm init -y` to generate a `package.json` file.

### 2. Install and Configure ESLint
- Ran `npm init @eslint/config` to start the ESLint setup tool.
- Followed the prompts: - Linting JavaScript files
- Using CommonJS modules
- No framework
- No TypeScript
- Code runs in Node.js
- Chose JavaScript format for the config file
- ESLint generated the file `eslint.config.mjs`.

---

## ESLint Configuration

### 3. Exploring ESLint Configuration
Opened `eslint.config.mjs` and reviewed the default rules and structure created by ESLint’s new Flat Config system. 

### 4. Modifying ESLint Rules
Updated the following rules to match my preferred coding style:

```js
rules: {
    semi: ["error", "always"],
    quotes: ["warn", "single"]
}