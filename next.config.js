/** @type {import("next").NextConfig} */
module.exports = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "magicui.design",
      },
    ],
  },
};
