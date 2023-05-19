//Задачи с модуля 7

//#2 функция проверки наличия свойства

	const obj={prop1:1,
            prop2:2,
            prop3:3
            };     
 	function checkProp(a,b){
     	if(a in b){
      		return true;
    	}else{
      		return false;
    	}
 	}  
 	console.log(checkProp("string",obj));