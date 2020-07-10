array1=[10,20,30,40];

function best(arr,callback){
  array2=[];
  for(var i=0;i<array1.length;i++){
    array2.push(callback(array1[i]));
  }
  return array2;
}

function Good(bb){
  return bb-1;
}

function Bad(cc){
  return cc+1;
}

console.log(best(array1,Good));
console.log(best(array1,Bad));
