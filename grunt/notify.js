module.exports = {
  server: {
    options: {
      title: 'Site served',
      message: 'Site served on <%= grunt.config.get("http-server").dev.host %>:<%= grunt.config.get("http-server").dev.port %>'
    }
  },
  watch: {
    options: {
      title: 'Site updated',
      message: "Site files updated"
    }
  },
  deploy: {
    options: {
      title: 'Site deployed',
      message: "Deployment completed!"
    }
  }
};
