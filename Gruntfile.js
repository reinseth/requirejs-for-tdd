module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-jasmine");

    grunt.initConfig({
        jasmine: {
            test: {
                src: 'src/**/*.js',
                options: {
                    specs: 'spec/**/*Spec.js',
                    helpers: 'lib/autoMock.js',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: {
                            baseUrl: 'src'
                        }
                    },
                    keepRunner: true
                }
            }
        }
    });

    grunt.registerTask("default", [
        'jasmine',
    ]);
};