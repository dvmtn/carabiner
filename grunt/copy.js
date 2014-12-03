module.exports = {
  html: {
    files: [
      {
        expand: true,
        cwd: 'html/',
        src: ['**/*.html'],
        dest: 'dist/'
      }
    ]
  },
  svg: {
    files: [
      {
        expand: true,
        cwd: 'images/',
        src: ['**/*.svg'],
        dest: 'dist/images/'
      }
    ]
  }
};
