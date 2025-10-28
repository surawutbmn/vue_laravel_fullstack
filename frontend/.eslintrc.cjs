module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:vue/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "vue/no-multiple-template-root": "off",
  },
}
