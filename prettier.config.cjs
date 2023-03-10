/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  trailingComma: "all",
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 120,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
