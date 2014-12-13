module.exports = {
  compile: {
    files: [
      {
        expand: true,
        cwd: 'html/',
        src: ['**/*.jade'],
        dest: 'dist/',
        ext: '.html',
        extDot: 'first'
      }
    ]
  }
};
