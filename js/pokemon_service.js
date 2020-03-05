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
            url:"../data/pokemon_full.json"
          }
        )
        .then(function (result) {
          return result.data;
        });
      };
    }

})();
