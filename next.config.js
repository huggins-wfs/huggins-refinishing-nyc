/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  // Lets one repo power many city sites: set SITE_CITY per deployment.
  env: { SITE_CITY: process.env.SITE_CITY || "" },
};
