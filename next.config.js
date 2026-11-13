/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // STATIC_EXPORT=1 npm run build -> plain HTML in /out for any static host
  ...(process.env.STATIC_EXPORT && { output: "export" }),
  poweredByHeader: false,
  trailingSlash: Boolean(process.env.STATIC_EXPORT), // folder/index.html works on every static host
  // Lets one repo power many city sites: set SITE_CITY per deployment.
  env: { SITE_CITY: process.env.SITE_CITY || "" },
};
