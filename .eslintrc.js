const OFF = 0, WARN = 1, ERROR = 2;
module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "standard"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "no-extra-parens": ERROR,
    "semi": [ERROR, "never"],
    "block-scoped-var": WARN,
    "curly": ERROR,
    "eqeqeq": [ERROR, "smart"],
    "max-len": [WARN, 100],
    "max-params": [WARN, 8],
    "max-depth": [WARN, 6],
    "max-nested-callbacks": [WARN, 6],
    "spaced-comment": [ERROR, "always"],
    "no-mixed-spaces-and-tabs": WARN,
    "no-lonely-if": WARN,
    "no-trailing-spaces": WARN,


  }
}