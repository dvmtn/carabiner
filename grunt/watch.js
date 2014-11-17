module.exports = {
  js:{
    files: ['js/**/*.js'],
    tasks: [
      'concat',
      'uglify'
    ]
  },
  css: {
    files: ['css/**/*.scss'],
    tasks: ['sass'],
    options: {
      livereload: true,
    }
  }
};
