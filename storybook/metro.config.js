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
    // Trying to resolve packages.
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) => {
        console.log("target", target)
        console.log("HERE", path.join(process.cwd(), `node_modules/${name}`))
        return name in target
          ? target[name]
          : path.join(process.cwd(), `node_modules/${name}`)
      }
    })
  },
  watchFolders
}
