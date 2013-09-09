module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-open");

    grunt.initConfig({
        connect: {
            jasmine: {
                options: {
                    middleware: function (connect, options) {
                        return [
                            require('connect-livereload')(),
                            connect.static(options.base)
                        ];
                    }
                }
            }
        },

        watch: {
            jasmine: {
                files: ['src/**/*.js', 'test/**/*.js'],
//                tasks: ['jasmine:fixtures:build'],
                options: {
                    livereload: true,
                    forceWatchMethod: 'old'
                }
            }
        }
    });

    grunt.registerTask("default", [
        'connect',
        'watch'
    ]);
};