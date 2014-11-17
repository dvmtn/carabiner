module.exports = {
  js:{
    files: ['js/src/*.js'],
    tasks: [
      'concat'
    ]
  },
  css: {
    files: 'css/src/*.scss',
    tasks: ['sass'],
    options: {
      livereload: true,
    }
  }
};
