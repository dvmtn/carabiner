module.exports = {
  options: {
    banner: '/*! <%= package.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
  },
  dist: {
    files: {
      'js/dist/<%= package.name %>.min.js': ['<%= concat.dist.dest %>']
    }
  }
};
