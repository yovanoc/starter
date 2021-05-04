/* eslint-disable */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const { i18n } = require("./next-i18next.config");
const withBundleAnalyzer = require("@next/bundle-analyzer");

const base = {
  i18n,
  future: {
    webpack5: true,
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/',
  //       headers: [
  //         {
  //           key: 'x-frame-options',
  //           value: 'deny',
  //         }, {
  //           key: 'Content-Security-Policy',
  //           value: "default-src 'self' *.starter.com",
  //         }, {
  //           key: 'X-XSS-Protection',
  //           value: "1; mode=block",
  //         }, {
  //           key: 'X-Content-Type-Options',
  //           value: "nosniff",
  //         },
  //       ],
  //     },
  //   ]
  // }
};

module.exports = (phase, { defaultConfig }) => {
  const config = {
    ...defaultConfig,
    ...base,
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /* development only config options here */
  } else {
    /* config options for all phases except development here */
  }

  return withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  })(withPWA(config));
};
