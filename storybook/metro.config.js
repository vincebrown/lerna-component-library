/* eslint-disable no-console */
/* eslint-disable no-path-concat */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
const extraNodeModules = {
  packages: path.resolve(__dirname + "/../packages")
}
const watchFolders = [path.resolve(__dirname + "/../packages")]

module.exports = {
  transformer: {
    assetPlugins: ["expo-asset/tools/hashAssetFiles"]
  },
  resolver: {
    // Trying to resolve packages this does not solve the problem of metro not handling symlinks from hoisted node modules
    // One option is just install every dependency needed in the storybook application so it does not need to resolve the symlinks
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) => {
        return name in target
          ? target[name]
          : path.join(process.cwd(), `node_modules/${name}`)
      }
    })
  },
  watchFolders
}
