let { log } = console;
// let cat = { type: "tiger", size: "large" };

// let json = JSON.stringify(cat, ["type"]);

// console.log(json);

/************************************************************/
// // let obj = { type: "lion" }
// let cat = Object.create({ type: "lion" }); // Создается в прототипе
// cat.size = "large";

// let copyCat = { ...cat }; // Прототипы не копируется
// cat.type = "tiger";

// log(cat);
// log(copyCat);
// log(copyCat.type,copyCat.size);

/************************************************************/

// var sound = "grunt";
// var bear = { sound: "roar" };

// function roar(){
//   console.log(this.sound)
// }

// roar.apply(bear)
/************************************************************/

// const foo  = {
//   bar(){
//     log('hello')
//   },
//   name: 'Bahram'
// }
// log(foo.name) true
/************************************************************/

// class Person {
//   static quantity = 60;
// }

// let student = new Person();
// Person.quantity = 80;

// console.log(student.quantity);
/************************************************************/

// var cat = { name: "Athena" };
// function swap(param) {
//   param.name = "Wild";
//   param = { name: "Tabby" };
// }
// swap(cat);

// log(cat.name);//wild
/************************************************************/

// let rainForestAcres = 10;
// let animals = 0

// while(rainForestAcres < 13 || animals <= 2){
//   rainForestAcres++;
//   animals += 2
// }

// console.log(animals)//6