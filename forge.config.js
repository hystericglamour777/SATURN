module.exports = {
  packagerConfig: {
    name: "Jackal",
    executableName: "Jackal",
    icon: "images/icon",
    extendInfo: {
      LSUIElement: "true",
    },
    osxSign: {
      hardenedRuntime: false,
      gatekeeperAssess: false,
    },
  },
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "tpkahlon",
          name: "jackal-mac",
        },
        prerelease: true,
      },
    },
  ],
  makers: [
    {
      name: "@electron-forge/maker-zip",
      config: {},
    },
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-dmg",
      platforms: ["darwin"],
      config: {},
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};
