const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  env: {
    LANG: "en",
    TITLE: "Blog Nextjs",
    DESCRIPTION: "Blog developed in Next.js"
  },
  devIndicators: {
    autoPrerender: false
  },
  poweredByHeader: false
});
