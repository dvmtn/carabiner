module.exports = {
  dist: {
    src: [
      'js/src/before.js',
      'js/lib/jquery.js',
      'js/lib/*.js',
      'js/src/*.js',
      'js/src/after.js'
    ],
    dest: 'js/dist/<%= pkg.name %>.js'
  }
};
