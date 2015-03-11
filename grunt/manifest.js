module.exports = {
  generate: {
    options: {
      basePath: 'dist',
      network: ['http://*', 'https://*'],
      fallback: ['/ /index.html'],
      exclude: ['js/jquery.min.js'],
      preferOnline: true,
      verbose: true,
      timestamp: true,
      hash: true,
      master: ['index.html']
    },
    src: [
      '**/*.html',
      '**/*.mst',
      '**/*.min.js',
      '**/*.min.css',
      '**/*.min.css.map',
      '**/*.css',
      '**/*.json',
      '**/*.xml',
      '**/*.eot',
      '**/*.ttf',
      '**/*.woff',
      '**/*.woff2',
      '**/*.jpg',
      '**/*.png',
      '**/*.ico',
      '**/*.svg'
    ],
    dest: 'dist/manifest.appcache'
  }
};
