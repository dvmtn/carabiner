module.exports = {
  options: {
    banner: '/*! <%= package.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
  },
  dist: {
    files: {
      'dist/project.min.js': ['<%= concat.dist.dest %>']
    }
  }
};
