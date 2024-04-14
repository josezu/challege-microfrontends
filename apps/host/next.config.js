// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const HEADER_APP_URL =
  process.env.NEXT_PUBLIC_HEADER_APP_URL || 'http://localhost:3001';

const ACTIONS_APP_URL =
  process.env.NEXT_PUBLIC_ACTIONS_APP_URL || 'http://localhost:3002';

const LIST_APP_URL =
  process.env.NEXT_PUBLIC_LIST_APP_URL || 'http://localhost:3003';

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  return {
    header: `header@${HEADER_APP_URL}/_next/static/${location}/remoteEntry.js`,
    actions: `actions@${ACTIONS_APP_URL}/_next/static/${location}/remoteEntry.js`,
    list: `list@${LIST_APP_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, { isServer }) {
    config.plugins?.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer),
        extraOptions: {
          automaticAsyncBoundary: true,
        },
        exposes: {},
        shared: {},
      })
    );

    return config;
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
