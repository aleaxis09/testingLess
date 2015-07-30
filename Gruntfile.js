module.exports = function(grunt){
	require('jit-grunt')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify:{
			build: {
				src: 'jquery-2.1.1.js'	,
				dest: 'main/js/jquery-2.1.1.min.js'
			}
		},
		less: {
			development: {
				options: {
					paths: ['main/css/'],
					compress: true,
				},
				files: {
					"main/css/styles.css": "main/css/styles/*.less"
				}
			},
		},
		watch:{
				configFiles: {
					files: ['Gruntfile.js', 'main/*'],
					options: {
						reload: true,
						livereload: true
					}
				},
				less: {
					files: 'main/css/styles/*.less',
					tasks: ['less'],
					options: {
						reload: true,
						livereload: true					
					},
				},
		},
	});
/*	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');*/
	grunt.registerTask('default', ['uglify', 'watch', 'less']);
};
