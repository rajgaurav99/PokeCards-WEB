(function () {
  'use strict'
  angular.module("Pokedex",[])
  .controller("MainController",MainController)
  .filter('extract',extract)
  .filter('clean',clean)
  .filter('hexcolor',hexcolor)
  .service('PokemonService',PokemonService);

  function extract() {
    return(function(input) {
      var mySubString = input.substring(
      input.lastIndexOf("(") + 1,
      input.lastIndexOf(")")
    );
    return (mySubString);
    })
  }

  function hexcolor() {
    return function (input) {
      var color="";
      if(input=="Bug"){
        color="85A837";
      }
      else if(input=="Dragon"){
        color="9B73DF";
      }
      else if(input=="Electric"){
        color="EAEA1F";
      }
      else if(input=="Fighting"){
        color="";
      }
      else if(input=="Fire"){
        color="DC9338";
      }
      else if(input=="Flying"){
        color="CEBBF9";
      }
      else if(input=="Ghost"){
        color="5D4691";
      }
      else if(input=="Grass"){
        color="38DC56";
      }
      else if(input=="Ground"){
        color="DCD038";
      }
      else if(input=="Ice"){
        color="1FEAE2";
      }
      else if(input=="Poison"){
        color="8D54AA";
      }
      else if(input=="Psychic"){
        color="D24589";
      }
      else if(input=="Rock"){
        color="D0C75E";
      }
      else if(input=="Steel"){
        color="CACACA";
      }
      else if(input=="Fairy"){
        color="E8AFE8";
      }
      else if(input=="Dark"){
        color="877429";
      }
      else if(input=="Normal"){
        color="ADAD5E";
      }
      else{
        color="3881DC";
      }
      return color;
    }
  }

  function clean() {
    return function (input) {
      var result=input.replace("Ã©", "e");
      return result;
    }
  }

  MainController.$inject=["$scope","PokemonService"];

 function MainController($scope,PokemonService){
   var ctrl=this;
   ctrl.pokedata=PokemonService.getData();
   ctrl.pokemon_species ="";

   ctrl.closeinfo=function () {
     ctrl.viewinfo=false;
   };

   ctrl.showDetails = function(i) {
        ctrl.pokemon_name= i.name;
        ctrl.pokemon_species = i.species;
        ctrl.viewinfo=true;
        ctrl.pokemon_hp=i.stats.hp;
        ctrl.pokemon_atk=i.stats.attack;
        ctrl.pokemon_def=i.stats.defense;
        ctrl.pokemon_spatk=i.stats["sp.atk"];
        ctrl.pokemon_spdef=i.stats["sp.def"];
        ctrl.pokemon_speed=i.stats.speed;
        ctrl.pokemon_total=i.stats.total;

        ctrl.pokemon_abilities=i.abilities;
        ctrl.pokemon_evolution=i.evolution;
        hexagon.init('hexagon', 120, ['HP', 'ATK', 'DEF', 'SP. ATTACK', 'SP. DEF', 'SPEED']);
        hexagon.draw([ctrl.pokemon_hp/250,ctrl.pokemon_atk/134,ctrl.pokemon_def/180,ctrl.pokemon_spatk/154,ctrl.pokemon_spdef/125,ctrl.speed/140]);

    };
  }

  function PokemonService() {
    var service=this;
    service.getData=function () {
      var result=pokeinfo;
      return result;
    }
  }
})();
