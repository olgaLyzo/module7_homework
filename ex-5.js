//Задачи с модуля 7

//#5 

	class Devices{constructor(deviceParam){
		    this.name=deviceParam.name;
		    this.model=deviceParam.model;
		    this.year=deviceParam.year;
		    this.price=deviceParam.price;
		    this.power=deviceParam.power;
	 		}
	 		off(){
	    		this.on=false;
	 		}
	 		onn(){
	        this.off=false;
	 		}
	 		isActive(){
	        if(this.on){
	          console.log('you can work')
	        }else{
	        	console.log("turn it on")
	        }
	 	}
	 }
	 var deviceParam={name:"mixer",
	 				  model:"A32",
	                  year:2000,
	                  price:50,
	                  power:1000};
	                  
	 class Devices2 extends Devices{constructor(model,brand,color){
	 								super(model);
	 								this.brand=brand;
	                this.color=color;
	                }
	                getInfo(){
	                	console.log(`This device has such charachteristics: brend-${brand},color-${color}`)
	                }
	 }
	 var mixer=new Devices(deviceParam);
	 mixer.year=1990;
	 mixer.price=10;
	 mixer.model="A20";
	 
	 var blender=new Devices2(deviceParam);
	 blender.price=40;
	 blender.year=1989;
	 
	 console.log(mixer.off());
	 console.log(mixer.isActive());
	 console.log(blender.isActive());
	 
	 console.log(mixer instanceof Devices);

 