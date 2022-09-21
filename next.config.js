/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        titleProp: true,
        esModule: false,
      },
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      test: /\.svg$/,
    });

    return config;
  },
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '/',
  },
  swcMinify: true,
}

module.exports = nextConfig
