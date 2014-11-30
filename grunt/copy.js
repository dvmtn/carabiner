module.exports = {
  html: {
    files: [
      {
        expand: true,
        cwd: 'pages/',
        src: ['**/*.html'],
        dest: 'dist/'
      }
    ]
  }
};
