module.exports = function(grunt){
  grunt.source.loadAllTasks();

  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json')
    }
  });
};
