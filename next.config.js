/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /node_modules\/bootstrap\/dist\/js\/bootstrap\.js$/,
      use: [
        {
          loader: "next-swc-loader",
          options: {
            networkOnly: true,
          },
        },
      ],
    });

    return config;
  },
};
