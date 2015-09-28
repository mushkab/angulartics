// package metadata file for Meteor.js
var packageName = 'mushk:angulartics';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.20.1_1';
var summary = 'Analytics for AngularJS applications';
var gitLink = 'https://github.com/mushkab/angulartics.git';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('angular:angular@1.1.5', where);
  api.use('bigu:waypoints@0.0.3', where); // Dependencies
  api.use('mushk:sha1@0.1.1', where); 

  api.addFiles('src/angulartics.js', where);
  api.addFiles('src/angulartics-scroll.js', where); 
  api.addFiles('src/angulartics-splunk.js', where); 


  // Files in use
});  