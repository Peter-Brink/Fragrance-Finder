/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Adding @svgr/webpack loader to Next.js webpack config
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
