module.exports = {
  "modules": true,
  "plugins": {
    "postcss-preset-env": {
      "stage": 0,
      "browsers": "last 2 versions"
    },
    "postcss-modules": {
      "scopeBehaviour": "local",
      "globalModulePaths": [
        /index\./,
        /styles\/global\./,
        /styles\/settings/,
        /styles\/generics/,
        /styles\/elements/,
        /styles\/trumps/,
      ],
      "generateScopedName": "[name]__[local]--[hash:base64:3]",
      // "generateScopedName": "[path]__[name]__[local]__[hash:base64:5]"
    }
  }
}
