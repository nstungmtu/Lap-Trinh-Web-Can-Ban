"use strict";
class Person{
    #firstName;//Thuộc tính private, chỉ được truy xuất bên trong class
    lastName; //Thuộc tính public, có thể được truy xuất bên ngoài class
    #birthYear;
    //hàm constructor bắt buộc phải có
    constructor(firstName, lastName, birthYear){
        this.#firstName = firstName;
        this.lastName = lastName;
        this.#birthYear = birthYear;
    }
    //getter
    get firstName(){
        return this.#firstName;
    }
    //setter
    set firstName(value){
        if(value == undefined || typeof(value) !="string") throw new TypeError("Tên không hợp lệ");
        this.#firstName = value;
    }
    sayHello(){
        console.log(`Hi! I'm ${this.#firstName} ${this.lastName}`);
    }
}
const p = new Person("Dolores", "Abernathy", 1990);
console.log(p);
p.sayHello();
//p.firstName = "E";
// p.firstName = 1;
// console.log(p);

//Thừa kế
class Student extends Person{
    className;
    constructor(firstName, lastName, birthYear, className){
        super(firstName, lastName, birthYear);//Trước tiên phải gọi hàm constructor của class Person
        this.className = className;
    }
    //Ghi đè hàm của lớp cha
    sayHello(){
        console.log(`Hi! I'm a Student, my name is ${this.firstName} ${this.lastName}`);
    }
}
const student = new Student("Dolores", "Abernathy", 1990, "Software Engineering");
console.log(student);
student.sayHello();