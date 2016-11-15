module.exports = function(grunt) {

    grunt.initConfig({

        jshint: {
          files: ['gruntfile.js', 'app/js/script.js'],
          options: {
            globals: {
              jQuery: true
            }
          }
        },

        concat: {
            js: {
                src: ['node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap/dist/js/bootstrap.js', 'app/js/app.js'],
                dest: 'dist/js/script.min.js'
            },
            css: {
                src: ['app/css/style.css', 'node_modules/bootstrap/dist/css/bootstrap.css'],
                dest: 'dist/css/style.min.css'
            }
        },

        uglify: {
            ugly: {
                src: 'dist/js/script.min.js',
                dest: 'dist/js/script.min.js'
            }
        },

        cssmin: {
            options: {
                        shorthandCompacting: false,
                        roundingPrecision: -1
            },
            mytarget: {
                src:'dist/css/style.min.css',
                dest: 'dist/css/style.min.css'
            }
        },

        processhtml: {
            replaceScriptLinks: {
                files: {
                    './dist/index.html': ['./app/index.html']
                }
            }
        },

        copy: {
            main: {
                cwd: 'app/img',
                expand: true,
                src:'*',
                dest:'dist/img'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'processhtml', 'copy']);

};