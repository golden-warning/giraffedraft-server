;(function() {
  "use strict";

  angular
    .module('gDraft.services', [])
    .factory('services',

      function ($http) {

        function apiRequest(link){
	      return $http.get(link)
	        .then(function(data, status, headers, config) {
            var leagues = data.data
            console.log("apiRequest", data.data);
            //for (league in leagues) {
              return $http.post(teamInfo, 342.l.91924)
                .then(function(data,status,headers,config){
                  return data;
                })
            //}
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
    	$scope.text;
      $scope.leagues;
    	$scope.makeRequest = function(link){
    		console.log(link)
    		services.apiRequest(link).then(function(data){
    			$scope.leagues = data;
          console.log($scope.leagues);

    		})
    	}
    })

}).call(this);