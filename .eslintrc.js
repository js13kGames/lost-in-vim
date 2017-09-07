module.exports = {
  "extends": "idiomatic",
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
		"sourceType": "module",
		"ecmaFeatures": {
			"impliedStrict": true
		}
	},
  "rules": {
    "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "never",
        "exports": "never",
        "functions": "never"
    }],
    "no-console": 0,
    "one-var": ["error", "never"],
    "semi": ["error", "always"],
    "linebreak-style": 0
  }
}
