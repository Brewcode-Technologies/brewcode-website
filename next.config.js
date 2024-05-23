/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  }
};

module.exports = {
  ...nextConfig,

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
