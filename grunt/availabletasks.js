module.exports = {
    tasks: {
      options:{
        groups: {
          'main': ['dev', 'test', 'default', 'clean', 'deploy']
        },
        filter: 'exclude',
        tasks: ['availabletasks'],
        descriptions: {
          'tasks': 'Show the tasks Carabiner offers',
          'default': 'Do everything you need to compile your project',
          'dev': 'Serve the project on port 8080 and process files as they change',
          'deploy': 'Build and deploy the dist folder. Defaults to Github Pages',
          'test': 'Run Jasmine tests and jshint'
        }
      }
    }
};
