 module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          'js/src/before_all.js',
          'js/lib/jquery.js',
          'js/lib/*.js',
          'js/src/*.js',
          'js/src/after_all.js'
        ],
        dest: 'js/build/<%= pkg.name %>.min.js'
      }
    },
    jasmine: {
      src: 'js/build/<%= pkg.name %>.min.js',
      options:{
        specs: 'specs/*'
      }
    },
     uglify: {
       options: {
         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
       },
       dist: {
         files: {
           'js/build/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
         }
       }
     },
    sass: {
      dist: {
        files: {
          'css/build/<%= pkg.name %>.min.css' : 'css/src/base.scss'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/src/**/*.js', 'spec/**/*.js'],
      beforeconcat: ['js/src/*.js', 'specs/*.js']
    },
    watch: {
      js:{
        files: ['js/src/*.js'],
        tasks: [
          'concat',
        ]
      },
      css: {
        files: 'css/src/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      }
    }
  });

  // Load the plugins
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'watch',
    'concat',
    'sass'
  ]);

  grunt.registerTask('test', [
    'jasmine'
  ]);

  grunt.registerTask('build', [
    'jshint',
    'jasmine',
    'concat',
    'uglify'
  ]);

};
