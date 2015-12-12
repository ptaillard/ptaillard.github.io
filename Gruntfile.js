module.exports = function (grunt) {

    grunt.initConfig({
        vars: {
            client_vendors: 'vendors/',
            client_src: 'sources/',
            client_tests: 'tests/'
        },

        jscs: {
            default: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= vars.client_src %>',
                        src: ['**/*.js']
                    }, {
                        cwd: '<%= vars.client_tests %>',
                        src: ['**/*.js']
                    }
                ],
                options: {
                    config: '.jscsrc'
                }
            }
        },

        karma: {
            options: {
                configFile: '<%= vars.client_tests %>client_tests.conf.js'
            },
            client_tests: {
                browsers: ['Chrome'],
                singleRun: true
            },
            client_tests_env: {
                browsers: ['Chrome']
            }
        },

        sync: {
            dev: {
                files: [{
                    cwd: 'bower_components/',
                    src: ['*/*min.js', '*/*min.css'],
                    dest: '<%= vars.client_vendors %>'
                }, {
                    cwd: 'bower_components/mdi',
                    src: ['fonts/*.*', 'css/*.css', 'css/*.css.map'],
                    dest: '<%= vars.client_vendors %>mdi'
                }, {
                    cwd: 'bower_components/angular-mocks/',
                    src: ['*.js'],
                    dest: '<%= vars.client_vendors %>angular-mocks'
                }],
                verbose: true
            }
        },

        injector: {
            options: {
                addRootSlash:false
            },
            dev: {
                files: {
                    'index.html': ['<%= vars.client_src %>**/*.js']
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('dev', ['build', 'karma:client_tests_env']);
    grunt.registerTask('default', ['build', 'karma:client_tests']);
    grunt.registerTask('build', ['sync:dev', 'injector:dev', 'jscs']);

};
