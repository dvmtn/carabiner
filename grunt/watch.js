module.exports = {
  dist:{
    files: 'dist/**/*',
    options: {
      livereload: true
    }
  },
  js:{
    files: ['js/{src,lib}/**/*.js'],
    tasks: [
      'concat',
      'uglify'
    ]
  },
  jasmine:{
    files: ['js/test/**/*.js'],
    tasks: [ 'jasmine' ]
  },
  css: {
    files: ['css/**/*.scss'],
    tasks: ['sass'],
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
  },
  data: {
    files: ['data/**/*'],
    tasks: ['copy:data']
  }
};
