const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  env: {
    LANG: "en",
    STARTYEAR: 2020,
    TITLE: "Blog Next.js",
    DESCRIPTION: "Blog developed in Next.js"
  },
  devIndicators: {
    autoPrerender: false
  },
  poweredByHeader: false
});
