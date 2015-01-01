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

            return leagues;
	      });

        }

        function getTeamInfo(leagueKey){
          return $http.post('myteaminfo', leagueKey)
            .then(function(data, status, headers,config) {
              console.log("getTeamInfo", data);
            	return data.data;
            })

        }

      return {
        apiRequest: apiRequest,
        getTeamInfo: getTeamInfo
      };
    });
    
    angular.module('giraffeDraft', ['gDraft.services'])
    .controller('gDController', function($scope, services){

    	$scope.text = 'myteams';
      $scope.leagues;
    	$scope.makeRequest = function(link){
    		console.log(link)
        services.getTeamInfo('342.l.91924').then(function(data){
          console.log(data)
        })
        services.apiRequest(link).then(function(data){
          $scope.leagues = data;
          console.log($scope.leagues);
        })
    	}

    })

}).call(this);