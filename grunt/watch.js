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
  },
  images: {
    files: ['images/**/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  haml: {
    files: ['pages/**/*.haml'],
    tasks: ['haml']
  },
  html: {
    files: ['pages/**/*.html'],
    tasks: ['copy:html']
  }
};
