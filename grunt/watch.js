module.exports = {
  js:{
    files: ['js/{src,lib}/**/*.js'],
    tasks: [
      'concat',
      'uglify'
    ]
  },
  jasmine:{
    file: ['js/test/**/*.js'],
    tasks: [ 'jasmine' ]
  },
  css: {
    files: ['css/**/*.scss'],
    tasks: ['sass'],
    options: {
      livereload: true,
    }
  },
  images: {
    files: ['images/**/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  svg: {
    files: ['images/**/*.svg'],
    tasks: ['copy:svg'],
  },
  haml: {
    files: ['html/**/*.haml'],
    tasks: ['haml']
  },
  html: {
    files: ['html/**/*.html'],
    tasks: ['copy:html']
  }
};
