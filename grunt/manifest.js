module.exports = {
  generate: {
    options: {
      basePath: 'dist',
      network: ['http://*', 'https://*'],
      fallback: ['/ /offline.html'],
      exclude: ['js/jquery.min.js'],
      preferOnline: true,
      verbose: true,
      timestamp: true,
      hash: true,
      master: ['index.html']
    },
    src: [
      '**/*.html',
      '**/*.min.js',
      '**/*.css',
      '**/*.json',
      '**/*.jpg',
      '**/*.png',
      '**/*.svg',
      '**/*'
    ],
    dest: 'dist/manifest.appcache'
  }
};
