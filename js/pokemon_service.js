(function () {
  'use strict';
  angular.module("Pokedex")
  .service('PokemonService',PokemonService);

    function PokemonService() {
      var service=this;
      service.getData=function () {
        var result=pokeinfo;
        return result;
      }
    }

})();
