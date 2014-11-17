module.exports = {
  js:{
    files: ['js/**/*.js'],
    tasks: [
      'concat'
    ]
  },
  css: {
    files: 'css/**/*.scss',
    tasks: ['sass'],
    options: {
      livereload: true,
    }
  }
};
