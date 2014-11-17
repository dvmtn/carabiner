module.exports = {
  options: {
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
  },
  dist: {
    files: {
      'js/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
    }
  }
};
