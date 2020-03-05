(function () {
  'use strict';
  angular.module("Pokedex",[])
  .controller("MainController",MainController)


  MainController.$inject=["PokemonService"];

 function MainController(PokemonService){
   var ctrl=this;
   var promise=PokemonService.getdata();
   promise.then(function (response) {
     ctrl.pokedata=response;
   })
   .catch(function (error) {
     console.log("Error in fetching the data from source");
   });
   ctrl.pokemon_species ="";
   ctrl.pokemon_id="";

   ctrl.closeinfo=function () {
     ctrl.viewinfo=false;
   };

   ctrl.showDetails = function(i) {
        ctrl.id=i.id;
        ctrl.gen=i.gen;
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
        hexagon.draw([ctrl.pokemon_hp/255,ctrl.pokemon_atk/185,ctrl.pokemon_def/230,ctrl.pokemon_spatk/180,ctrl.pokemon_spdef/230,ctrl.speed/180]);

    };
  }

})();
