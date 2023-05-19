//Задачи с модуля 7

//#1 функция вывода ключей

	const obj={prop1:1,
	           prop2:2,
	           prop3:3};
            
	const obj2=new Object();
	obj2.newprop="hello";

	obj.addprop=obj2;

	function check(obj){
	  for(let prop in obj){
	    if(obj.hasOwnProperty(prop)){
	    	console.log(prop);
	    }
	  
	  }
	}

	const result=check(obj);