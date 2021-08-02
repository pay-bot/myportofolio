module.exports = {
  trailingSlash: true,
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
}