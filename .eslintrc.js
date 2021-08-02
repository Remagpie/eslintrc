"use strict";

var jsRules = {
	"array-bracket-newline": "error",
	"array-bracket-spacing": "error",
	"array-element-newline": ["error", "consistent"],
	"arrow-body-style": "error",
	"arrow-parens": "error",
	"arrow-spacing": "error",
	"block-spacing": "error",
	"brace-style": ["error", "1tbs", {
		allowSingleLine: true,
	}],
	"comma-dangle": ["error", "always-multiline"],
	"comma-spacing": "error",
	"comma-style": "error",
	"computed-property-spacing": "error",
	"consistent-return": "error",
	"curly": "error",
	"dot-location": ["error", "property"],
	"dot-notation": "error",
	"eol-last": "error",
	"eqeqeq": ["error", "always", { null: "ignore" }],
	"function-call-argument-newline": ["error", "consistent"],
	"func-call-spacing": "error",
	"function-paren-newline": ["error", "consistent"],
	"generator-star-spacing": ["error", "after"],
	"guard-for-in": "error",
	"implicit-arrow-linebreak": "error",
	"indent": ["error", "tab", {
		SwitchCase: 1,
	}],
	"jsx-quotes": "error",
	"key-spacing": "error",
	"keyword-spacing": "error",
	"linebreak-style": "error",
	"max-len": ["error", { code: 100 }],
	"multiline-ternary": ["error", "always-multiline"],
	"new-parens": "error",
	"no-alert": "error",
	"no-await-in-loop": "off",
	"no-bitwise": "error",
	"no-caller": "error",
	// "no-class-assign": "off", // Typescript
	"no-confusing-arrow": "error",
	"no-console": "error",
	// "no-const-assign": "off", // Typescript
	"no-constant-condition": ["error", {
		checkLoops: false,
	}],
	"no-constructor-return": "error",
	// "no-dupe-args": "off", // Typescript
	// "no-dupe-class-members": "off", // Typescript
	"no-dupe-else-if": "error",
	// "no-dupe-keys": "off", // Typescript
	"no-duplicate-imports": "error",
	"no-empty-function": "error",
	"no-eval": "error",
	"no-extra-label": "error",
	"no-extra-parens": ["error", "all", {
		ignoreJSX: "all",
		nestedBinaryExpressions: false,
	}],
	"no-extra-semi": "error",
	// "no-fallthrough": "off", // Typescript
	"no-floating-decimal": "error",
	"no-implicit-coercion": "error",
	"no-implied-eval": "error",
	"no-import-assign": "error",
	"no-invalid-this": "error",
	"no-irregular-whitespace": ["error", { skipStrings: false }],
	"no-iterator": "error",
	"no-label-var": "error",
	"no-labels": ["error", { allowLoop: true, allowSwitch: true }],
	"no-lone-blocks": "error",
	"no-multi-assign": "error",
	"no-multi-spaces": ["error", { ignoreEOLComments: true }],
	"no-multi-str": "error",
	"no-multiple-empty-lines": "error",
	"no-new": "error",
	"no-new-func": "error",
	"no-new-object": "error",
	// "no-new-symbol": "off", // Typescript
	"no-new-wrappers": "error",
	// "no-obj-calls": "off", // Typescript
	"no-octal-escape": "error",
	"no-param-reassign": "error",
	"no-proto": "error",
	"no-regex-spaces": "off",
	"no-return-assign": ["error", "always"],
	"no-self-compare": "error",
	"no-sequences": "error",
	"no-setter-return": "off", // Typescript
	"no-shadow": "error",
	"no-this-before-super": "off", // Typescript
	"no-throw-literal": "error",
	"no-trailing-spaces": "error",
	"no-undef": "off", // Typescript
	"no-unreachable": "off", // Typescript
	"no-unsafe-negation": ["off", { enforceForOrderingRelations: true }],
	"no-unused-expressions": "error",
	"no-unused-vars": "off", // Typescript
	"no-useless-call": "error",
	"no-useless-computed-key": "error",
	"no-useless-rename": "error",
	"no-var": "error",
	"no-void": "error",
	"no-whitespace-before-property": "error",
	"object-curly-newline": "error",
	"object-curly-spacing": "error",
	"object-shorthand": ["error", "properties"],
	"operator-linebreak": ["error", "after"],
	"padded-blocks": ["error", "never"],
	"prefer-arrow-callback": "error",
	"prefer-exponentiation-operator": "error",
	"prefer-object-spread": "error",
	"prefer-regex-literals": "error",
	"prefer-rest-params": "error",
	"prefer-spread": "error",
	"quote-props": ["error", "as-needed"],
	"quotes": ["error", "double", {
		avoidEscape: true,
	}],
	"radix": ["error", "as-needed"],
	"rest-spread-spacing": "error",
	"semi": "error",
	"semi-spacing": "error",
	"semi-style": "error",
	"space-before-blocks": "error",
	"space-in-parens": "error",
	"space-infix-ops": "off",
	"spaced-comment": "error",
	"switch-colon-spacing": "error",
	"template-curly-spacing": "error",
	"template-tag-spacing": "error",
	"use-isnan": ["error", {
		enforceForSwitchCase: true,
		enforceForIndexOf: true,
	}],
	"valid-typeof": "off", // Typescript
	"wrap-iife": "error",
	"yield-star-spacing": "error",
	"yoda": ["error", "never", { exceptRange: true }],
};

var tsRules = {
	// Rules covered by typescript compiler
	"no-class-assign": "off",
	"no-const-assign": "off",
	"no-dupe-args": "off",
	"no-dupe-class-members": "off",
	"no-dupe-keys": "off",
	"no-fallthrough": "off",
	"no-new-symbol": "off",
	"no-obj-calls": "off",
	"no-setter-return": "off",
	"no-this-before-super": "off",
	"no-undef": "off",
	"no-unreachable": "off",
	"no-unused-vars": "off",
	"valid-typeof": "off",
	"@typescript-eslint/no-use-before-define": "off",

	// Eslint rules replaced by typescript-eslint
	"brace-style": "off",
	"@typescript-eslint/brace-style": jsRules["brace-style"],
	"comma-spacing": "off",
	"@typescript-eslint/comma-spacing": jsRules["comma-spacing"],
	"comma-dangle": "off",
	"@typescript-eslint/comma-dangle": jsRules["comma-dangle"],
	"func-call-spacing": "off",
	"@typescript-eslint/func-call-spacing": jsRules["func-call-spacing"],
	"indent": "off",
	"@typescript-eslint/indent": jsRules["indent"],
	"keyword-spacing": "off",
	"@typescript-eslint/keyword-spacing": jsRules["keyword-spacing"],
	"no-duplicate-imports": "off",
	"@typescript-eslint/no-duplicate-imports": jsRules["no-duplicate-imports"],
	"no-empty-function": "off",
	"@typescript-eslint/no-empty-function": jsRules["no-empty-function"],
	"no-extra-parens": "off",
	"@typescript-eslint/no-extra-parens": jsRules["no-extra-parens"],
	"no-extra-semi": "off",
	"@typescript-eslint/no-extra-semi": jsRules["no-extra-semi"],
	"no-implied-eval": "off",
	"@typescript-eslint/no-implied-eval": jsRules["no-implied-eval"],
	"no-invalid-this": "off",
	"@typescript-eslint/no-invalid-this": jsRules["no-invalid-this"],
	"no-shadow": "off",
	"@typescript-eslint/no-shadow": jsRules["no-shadow"],
	"no-throw-literal": "off",
	"@typescript-eslint/no-throw-literal": jsRules["no-throw-literal"],
	"no-constant-condition": "off",
	"@typescript-eslint/no-unnecessary-condition": ["error", {
		allowConstantLoopConditions: true,
	}],
	"no-unused-expressions": "off",
	"@typescript-eslint/no-unused-expressions": jsRules["no-unused-expressions"],
	"object-curly-spacing": "off",
	"@typescript-eslint/object-curly-spacing": jsRules["object-curly-spacing"],
	"quotes": "off",
	"@typescript-eslint/quotes": jsRules["quotes"],
	"semi": "off",
	"@typescript-eslint/semi": jsRules["semi"],
	"space-infix-ops": "off",
	"@typescript-eslint/space-infix-ops": jsRules["space-infix-ops"],

	// New rules in typescript-eslint
	"@typescript-eslint/consistent-type-assertions": ["error", {
		assertionStyle: "as",
		objectLiteralTypeAssertions: "allow-as-parameter",
	}],
	"@typescript-eslint/consistent-type-definitions": ["error", "type"],
	"@typescript-eslint/explicit-function-return-type": "off",
	"@typescript-eslint/explicit-member-accessibility": "error",
	"@typescript-eslint/explicit-module-boundary-types": "off",
	"@typescript-eslint/method-signature-style": "error",
	"@typescript-eslint/no-base-to-string": "error",
	"@typescript-eslint/no-explicit-any": "off",
	"@typescript-eslint/no-extra-non-null-assertion": "error",
	"@typescript-eslint/no-inferrable-types": "off",
	"@typescript-eslint/no-floating-promises": "warn",
	"@typescript-eslint/no-this-alias": "off",
	"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
	"@typescript-eslint/no-non-null-assertion": "off",
	"@typescript-eslint/no-parameter-properties": "error",
	"@typescript-eslint/no-require-imports": "error",
	"@typescript-eslint/no-unsafe-assignment": "off",
	"@typescript-eslint/no-unsafe-call": "off",
	"@typescript-eslint/no-unsafe-member-access": "off",
	"@typescript-eslint/no-unsafe-return": "off",
	"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
	"@typescript-eslint/no-unnecessary-qualifier": "error",
	"@typescript-eslint/restrict-template-expressions": ["error", {
		allowNumber: true,
	}],
	"@typescript-eslint/prefer-as-const": "error",
	"@typescript-eslint/prefer-function-type": "error",
	"@typescript-eslint/prefer-includes": "off",
	"@typescript-eslint/prefer-namespace-keyword": "off",
	"@typescript-eslint/prefer-nullish-coalescing": ["error", {
		ignoreConditionalTests: false,
		ignoreMixedLogicalExpressions: false,
	}],
	"@typescript-eslint/prefer-optional-chain": "error",
	"@typescript-eslint/prefer-string-starts-ends-with": "off",
	"@typescript-eslint/restrict-plus-operands": ["error", {
		checkCompoundAssignments: true,
	}],
	"@typescript-eslint/strict-boolean-expressions": ["error", {
		allowString: false,
		allowNumber: false,
		allowNullableObject: false,
		allowNullableBoolean: true,
		allowNullableString: false,
		allowNullableNumber: false,
		allowAny: false,
	}],
	"@typescript-eslint/switch-exhaustiveness-check": "error",
};

module.exports = {
	root: true,
	rules: jsRules,
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			plugins: ["@typescript-eslint"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
			},
			rules: tsRules,
		},
	],
};
