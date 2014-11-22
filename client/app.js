;(function() {
  "use strict";

  angular
    .module('gDraft.services', [])
    .factory('services',

      function ($http) {

        function apiRequest(link){
	      return $http.get(link)
	        .then(function(data, status, headers, config) {

	        return data.data;

	      });

        }

        function getSuggestions(undrafted){
          return $http.post('http://giraffedraft.azurewebsites.net/api/suggest', undrafted)
            .then(function(data, status, headers,config) {
            	return data.data;
            })

        }

      return {
        apiRequest: apiRequest,
        getSuggestions: getSuggestions
      };
    });
    
    angular.module('giraffeDraft', ['gDraft.services'])
    .controller('gDController', function($scope, services){
    	$scope.text = 'http://fantasysports.yahooapis.com/fantasy/v2/team/342.l.91924.t.5?format=json'
    	$scope.makeRequest = function(link){
    		services.apiRequest(link).then(function(data){
    			console.log(data);
    		})
    	}
    })

}).call(this);