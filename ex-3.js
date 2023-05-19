//Задачи с модуля 7

//#3 функция созлания обьекта без прототипа

	let func=function emptyObj(){
	 	const obj=Object.create(null);
	  	console.log(obj);
	 }
 
 	console.log(func());