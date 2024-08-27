import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {};

const pwaConfig = withPWA({
  dest: 'public',
  disable: false,
  register: true,
  skipWaiting: true,
  sw: 'worker/index.js'
});

export default pwaConfig(nextConfig);