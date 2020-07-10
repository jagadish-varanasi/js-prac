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
