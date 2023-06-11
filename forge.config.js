const { parsed } = require("dotenv").config();
module.exports = {
  packagerConfig: {
    name: "Jackal",
    executableName: "Jackal",
    icon: "images/icon",
    appBundleId: "test",
    // appBundleId: "com.vincelwt.chatgptmac",
    extendInfo: {
      LSUIElement: "true",
    },
    osxSign: {
      hardenedRuntime: false,
      gatekeeperAssess: false,
      identity: "test",
      // identity: "Developer ID Application: Lyser.io Ltd (R4PF6TTR6Z)",
    },
    osxNotarize: {
      appBundleId: "test",
      // appBundleId: "com.vincelwt.chatgptmac",

      tool: "notarytool",
      // appleId: parsed.APPLE_ID,
      // appleIdPassword: parsed.APPLE_PASSWORD,
      // teamId: parsed.APPLE_TEAM_ID,
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
  rebuildConfig: {},
  makers: [
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
