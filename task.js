let teslaX={};
teslaX.make='Tesla';
teslaX.model='X';
teslaX.price=90000;
console.log(teslaX.price);
teslaX.beep=beep;
// function(){
//     console.log('Tesla X beep-beep');
// }
teslaX.beep();
let volkswagenAtlas={
    make:'volkswagen',
    model:'atlas',
    price:34000,
    beep: beep,
    // function(){
    //     console.log('volkswagen Atlas beep-beep');
    // }
};
volkswagenAtlas.beep();

function beep(){
    console.log(this.model+' '+this.make+' beep-beep')
}

function Car (make, model, price){
    this.make=make;
    this.model=model;
    this.price=price;
    // this.beep=beep;
}
Car.prototype.beep=beep;
let audiQ8 = new Car('Audi', 'Q8', 70000);
audiQ8.beep();

class SuperCar {
    constructor(make, model, price){
    this.make=make;
    this.model=model;
    this.price=price;
    }
    beep(){
        console.log(this.make+' '+'beep-beep-beep');
    }
}
let buggati = new SuperCar('Buggati','Veron', 99999);
buggati.beep();
let buggatiShiron =Object.create(buggati);
buggatiShiron.model='Chiron';
console.log(JSON.stringify(buggatiShiron));
buggatiShiron.beep();
let zazSensJson = {
    "make": "ZAZ",
    "model":"Sens",
    "price":1000
};
let zazSens=JSON.parse(zazSensJson);
zazSens.beep=beep;
zazSens.beep();

function animal(obj){
  return 'This '+obj.color+' '+obj.name+' '+'has'+' '+obj.legs+' '+'legs.';
}
function giveMeFive(obj){
let result=[];
  for (let key in obj){
  let val=obj[key];
  if(key.length===5){
  result.push(key);
  }
  if (val.length===5){
  result.push(val);
  }
}
return result;
}