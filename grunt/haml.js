module.exports = {
  dist: {
    'files': [
      {
        expand: true,
        cwd: 'pages/',
        src: ['**/*.haml'],
        dest: 'dist/',
        ext: '.html',
        extDot: 'first'
      }
    ]
  }
};
