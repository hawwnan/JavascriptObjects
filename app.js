// const student = {
//     name : 'Muhammad Ali',
//     age : 22,
//     marks : 85,
//     printGrade : function() {
//         console.log("Marks = ", this.marks); //this.marks == student.marks
//     },
// };

// const employee = {
//     calTax() {
//         console.log('Tax is 10%');
//     }
// }

// const employee1 = {
//     salary : 50000
// }

// employee1.__proto__ = employee;
// class Car {

//     constructor() {
//         console.log('in constructor')
//     }

//     start() {
//         console.log('start');
//     }

//     stop() {
//         console.log('stop')
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new Car()
// let lexus = new Car();
// fortuner.setBrand('fortuner')

// class Parent {
//     hello() {
//         console.log('hello')
//     }
// }

// class Child extends Parent {

// }

// let obj = new Child()

// class Person {

//     constructor(name) {
//         this.name = name;
//         this.species = 'homo sapiens';
//     }
//     eat() {
//         console.log('eat')
//     }
//     sleep() {
//         console.log('sleep')
//     }
//     work(){
//         console.log('do nothing')
//     }
// }

// class Engineer extends Person{
//     constructor(name) {
//         super(name)
//     }
//     work(){
//         super.eat()
//         console.log('Build something')
//     }
// }

// let eng1 = new Engineer('Ali');
// let Data = 'secret information'
// class User{
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log(`data is : ${Data}`)
//     }
// }
// class Admin extends User{
//     constructor(name, email) {
//         super(name, email)
//     }
//     editData() {
//         Data = 'This is the new data';
//     }
// }

// let user = new User('Ali', 'Ali@gmail.com')
// let user2 = new User('Ahmad', 'Ahmad@gmail.com')
// let admin = new Admin('Admin', 'admin@gmail.com')