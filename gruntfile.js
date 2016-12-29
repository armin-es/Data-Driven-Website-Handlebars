module.exports = function(grunt) {

    grunt.initConfig({

        jshint: {
          files: ['gruntfile.js', 'app/js/data.js', 'app/js/script.js'],
          options: {
            globals: {
              jQuery: true
            }
          }
        },

        concat: {
            js: {
                src: ['node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap/dist/js/bootstrap.js', 'node_modules/handlebars/dist/handlebars.min.js', 'app/js/data.js', 'app/js/script.js'],
                dest: 'dist/js/script.js'
            },
            css: {
                src: ['node_modules/bootstrap/dist/css/bootstrap.css', 'app/css/style.css'],
                dest: 'dist/css/style.css'
            }
        },

        uglify: {
            my_target: {
                files: {
                    'dist/js/script.min.js': ['dist/js/script.js']
                }
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: '*.css',
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },

        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['app/index.html']
                }
            }
        },

        copy: {
            main: {
                expand: true,
                cwd: 'app/img/',
                src:'*',
                dest:'dist/img/'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'processhtml', 'copy']);

};