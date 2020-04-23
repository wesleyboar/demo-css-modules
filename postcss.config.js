module.exports = {
  "modules": true,
  "plugins": {
    "postcss-modules": {
      "scopeBehaviour": "local",
      "globalModulePaths": [
        /styles\/trumps/,
        /styles\/global/,
        /index\./,
      ],
      "generateScopedName": "[path]__[name]__[local]__[hash:base64:5]"
    }
  }
}
