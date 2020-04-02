(function () {
  'use strict';
  angular.module("Pokedex")
  .service('PokemonService',PokemonService);

    PokemonService.$inject=['$http'];
    function PokemonService($http) {
      var service=this;

      service.getdata=function () {
        return $http(
          {
            method:"GET",
            url:"https://pokecards-1e48b.firebaseio.com/data_array.json"
          }
        )
        .then(function (result) {
          return result.data;
        });
      };
    }

})();
