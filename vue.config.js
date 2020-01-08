module.exports = {
  outputDir: './docs',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_vue.scss";`
      }
    }
  }
}
