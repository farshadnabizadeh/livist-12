const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: "tr",
    locales: ["tr","en", "ru", "fa", "ar"],
  },
  localePath: path.resolve("./translations"),
  reloadOnPrerender: process.env.NODE_ENV !== "production",
  react: { useSuspense: false },
};
