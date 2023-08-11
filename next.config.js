module.exports = {
  env: {
    PORT_ONE: 1001,
    PORT_TWO: 1002,
    PORT_THREE: 1003,
    PORT_FOUR: 1004,
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // newNextLinkBehavior: false,
    // legacyBehavior: false,
  },
}

module.exports = nextConfig
