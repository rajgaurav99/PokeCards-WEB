(function () {
  'use strict';

  angular.module("Pokedex")
  .filter('extract',extract)
  .filter('hexcolor',hexcolor)
  .filter('genplace',genplace)

  function extract() {
    return(function(input) {
      var mySubString = input.substring(
      input.lastIndexOf("(") + 1,
      input.lastIndexOf(")")
    );
    return (mySubString);
    })
  }

  function genplace() {
    return(function(input) {
      var result="";
      if(input==1){
        result="Kanto";
      }
      else if(input==2){
        result="Johto";
      }
      else if(input==3){
        result="Hoenn";
      }
      else if(input==4){
        result="Sinnoh";
      }
      else if(input==5){
        result="Unova";
      }
      else if(input==6){
        result="Kalos";
      }
      else if(input==7){
        result="Alola";
      }
      else{
        result="Not Recognized";
      }
      return result;
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
})();
