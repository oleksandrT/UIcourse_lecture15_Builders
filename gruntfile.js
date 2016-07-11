module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dev/scss',
                    src: ['*.scss'],
                    dest: 'build/css/',
                    ext: '.css',
                    rename: function (dest, src) {
                        return dest + src.replace('app', 'style');
                    }
                }]
            }
        },

        copy: {
            html: {
                files: [
                    {cwd: 'dev/', src: ['index.html'], dest: 'build/', expand: true}
                ]
            },

            js: {
                files: [
                    {cwd: 'dev/js', src: ['script.js'], dest: 'build/js', expand: true}
                ]
            },

            images: {
                files: [
                    {cwd: 'dev/images', src: ['*.jpg'], dest: 'build/images', expand: true, rename: function (dest, src) {
                        return dest + "/" + src.replace(/\w+.jpg/, 'image1.jpg');
                    }}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['sass', 'copy']);

};