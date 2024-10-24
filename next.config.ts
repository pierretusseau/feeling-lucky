import type { NextConfig } from "next";
import UnoCSS from '@unocss/webpack';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false
    config.plugins.push(UnoCSS())
    return config
  },
};

export default nextConfig;
