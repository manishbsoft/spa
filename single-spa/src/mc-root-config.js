import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
    activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@mc/react-single",
  app: () =>
    System.import("@mc/react-single"),
    activeWhen: (location) => location.pathname === '/react-single',
});


registerApplication({
  name: "@mc/react-multiple",
  app: () =>
    System.import("@mc/react-multiple"),
    activeWhen: ['/react-multiple']
});

registerApplication({
  name: "@mc/react-app",
  app: () =>
    System.import("@mc/react-app"),
    activeWhen: ['/react-app']
});

start({
  urlRerouteOnly: true,
});
