module.exports = {
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/static/locales")
      : "/locales",
};
