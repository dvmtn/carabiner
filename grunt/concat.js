module.exports = {
  dist: {
    src: [
      'js/lib/jquery.js',
      'js/lib/*.js',
      'js/src/before.js',
      'js/src/*.js',
      'js/src/after.js'
    ],
    dest: 'js/dist/<%= pkg.name %>.js'
  }
};
