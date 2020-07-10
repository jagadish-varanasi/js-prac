function returnFunc(job){
     if(job==='teacher'){
       return function(name){
         console.log(name+',can you please explain what u have learnt in UX design?');
       }
     }
  if(job==='student'){
    return function(name){
      console.log(name+'how is yor learing going on?');
    }
  }
  
}

var UXfunc=returnFunc('teacher');
UXfunc('Jaga');

var Stufunc=returnFunc('student');
Stufunc('Vara ');

returnFunc('teacher')('Jagadish');

