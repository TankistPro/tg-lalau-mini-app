import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api']
  },
  webpack(config) {
    config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.ts$|tsx/,
        use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
