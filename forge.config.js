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
};
