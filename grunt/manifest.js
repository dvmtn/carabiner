module.exports = {
  generate: {
    options: {
      basePath: 'dist',
      preferOnline: true,
      verbose: true,
      timestamp: true,
      hash: true,
      master: ['index.html']
    },
    src: [
      '**/*.html',
      '**/*.js',
      '**/*.css',
      '**/*.*',
      'CNAME'
    ],
    dest: 'dist/manifest.appcache'
  }
};
