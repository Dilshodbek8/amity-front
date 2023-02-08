// / https://github.com/i18next/i18next-parser#options

module.exports = {
  locales: ["ru", "uz", "en"],
  defaultNamespace: "translation",
  namespaceSeparator: false,
  keySeparator: false,
  useKeysAsDefaultValue: true,
  output: "assets/locales/$LOCALE/$NAMESPACE.json",
  createOldCatalogs: false,
  sort: true,
};
