//iife
(function(){
  var score=Math.random()*10;
  console.log(score);
})();



//iife with arguments.
(function(good){
  var score=Math.random()*10-good;
  console.log(score);
})(1);



///closures


function clo(app){
  var a="Jaga";
  return function(add1){
    console.log("Your num "+add1+" and global values are "+" "+app+" "+a);
    console.log("Even we can acess add1 and app value bcz of scope chain! and this is call closures where values are access even after function returns")
  }
}

clo('Hello')(12);
