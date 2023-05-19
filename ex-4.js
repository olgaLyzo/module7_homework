//Задачи с модуля 7

//#4 

	function Devices(deviceParam){
    this.name=deviceParam.name;
    this.model=deviceParam.model;
    this.year=deviceParam.year;
    this.price=deviceParam.price;
    this.power=deviceParam.power;
	 }
	 
	 Devices.prototype.off=function(){
	    		this.on=false;
	        console.log("off")
	 };
	 Devices.prototype.onn=function(){
	        this.off=false;
	        console.log("on")
	 };
	 Devices.prototype.isActive=function(){
	        if(this.on){
	          console.log('you can work')
	        }else{
	        	console.log("turn it on")
	        }
	 }
	 var deviceParam={name:"mixer",
	 				  model:"A32",
	                  year:2000,
	                  price:50,
	                  power:1000};
	 var mixer=new Devices(deviceParam);
	 mixer.year=1990;
	 mixer.price=10;
	 mixer.model="A20";
	 
	 var blender=new Devices(deviceParam);
	 blender.price=40;
	 blender.year=1989;
	 
	 console.log(mixer.off());
	 console.log(mixer.isActive());
 