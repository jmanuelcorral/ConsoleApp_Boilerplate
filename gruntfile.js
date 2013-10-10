module.exports = function(grunt) {
  
  var srcFiles = 'src/**/*.js';
  var specFiles = 'spec/**/*.js';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      build: {
        src: srcFiles,
      }
    },
    
    uglify: {
      build: {
        src: srcFiles,
        dest: 'build/all.min.js',
        options: {
          sourceMap: 'build/all.min.js.map'
        }
      }
    },
    
    jasmine: {
      build: {
        src: srcFiles,
        options: {
          specs: specFiles
        }
      }
    },
    
    watch: {
      build: {
        files: [srcFiles, specFiles],
        tasks: ['jshint', 'jasmine', 'uglify']
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
 
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['jshint', 'jasmine', 'uglify']);
};