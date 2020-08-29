module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: {
            '--t-s': '(min-width: 616px)',
            '--t': '(min-width: 980px)',
            '--d-s': '(min-width: 1095px)',
            '--d': '(min-width: 1270px)'
          }
        }
      ]
    }
  }
}
