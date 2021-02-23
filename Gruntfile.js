'use strict';
module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  // Project configuration.
  grunt.initConfig({
    watch: {
      js: {
        files: ['src/{,*/}*.js', '!lib/{,*/}*.js', 'Gruntfile.js'],
        tasks: ['jshint'],
        options: {
          interrupt: true,
        },
      }
    },
    jshint: {
      options: {
          reporter: require('jshint-stylish'),
          jshintrc: true
      },
      all: ['Gruntfile.js', 'src/js/**/*.js', '!node_modules/*/*.js']
    },
    browserSync: {
        bsFiles: {
            src : ['./{,*/}*.html', 'src/{,*/}*.js']
        },
        options: {
          watchTask: true,
          open: false,
          server: './'
        }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'browserSync', 'watch']);

};