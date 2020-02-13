(function () {
  'use strict'
  angular.module("Pokedex",[])
  .controller("MainController",MainController)
  .filter('extract',function () {
    return(function(input) {
      var mySubString = input.substring(
      input.lastIndexOf("(") + 1,
      input.lastIndexOf(")")
    );
    return (mySubString);
    })
  }).filter('clean',function () {
    return function (input) {
      var result=input.replace("Ã©", "e");
      return result;
    }
  })
  .filter('hexcolor',function () {
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
  });

  MainController.$inject=["$scope"];

 function MainController($scope){
   $scope.pokedata=pokeinfo;
   $scope.pokemon_name="";
   $scope.pokemon_species ="";
   $scope.pokemon_hp="";
   $scope.pokemon_atk="";
   $scope.pokemon_def="";
   $scope.pokemon_spatk="";
   $scope.pokemon_spdef="";
   $scope.pokemon_speed="";
   $scope.pokemon_total="";
   $scope.pokemon_abilities="";
   $scope.pokemon_evolution="";


   $scope.closeinfo=function () {
     $scope.viewinfo=false;
   };

   $scope.showDetails = function(i) {
        $scope.pokemon_name= i.name;
        $scope.pokemon_species = i.species;
        $scope.viewinfo=true;
        $scope.pokemon_hp=i.stats.hp;
        $scope.pokemon_atk=i.stats.attack;
        $scope.pokemon_def=i.stats.defense;
        $scope.pokemon_spatk=i.stats["sp.atk"];
        $scope.pokemon_spdef=i.stats["sp.def"];
        $scope.pokemon_speed=i.stats.speed;
        $scope.pokemon_total=i.stats.total;

        $scope.pokemon_abilities=i.abilities;
        $scope.pokemon_evolution=i.evolution;
        hexagon.init('demo', 120, ['HP', 'ATK', 'DEF', 'SP. ATTACK', 'SP. DEF', 'SPEED']);
        hexagon.draw([$scope.pokemon_hp/250,$scope.pokemon_atk/134,$scope.pokemon_def/180,$scope.pokemon_spatk/154,$scope.pokemon_spdef/125,$scope.speed/140]);

    };
  }
})();
