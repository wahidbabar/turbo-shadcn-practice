/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "en",
  },
};

export default nextConfig;
