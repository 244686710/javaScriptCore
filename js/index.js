console.log('xiaoming\nxiaohong');
console.log('age\t 23\t name \t yadong');

function Sort(a, b){
    return a-b
}

console.log([0,11, 12, 22, 13, 33 ,15].sort(Sort))

// 面向对象
var person = {};
// 数据属性
Object.defineProperty( person, "name", {
    writable: false,
    value: 'Nicholas'
});

// alert(person.name);
// person.name = "Greg";
// alert(person.name);

// var book = {
//     _yaer: 2004,
//     edition: 1
// }

// Object.defineProperty(book, "year", {
//     get: function() {
//         return this._yaer
//     },
//     set: function(newValue) {
//         if (newValue > 2004) {
//             this._year = newValue;
//             this.edition += newValue - 2004;
//         }
   
//     }
// });

// book.year = 2005;
// alert(book.edition); //2


// 读取属性的特性 Object.getOwnPropertyDescriptor()

// var book = {};
// Object.defineProperties(book, {
//     _year: {
//         value: 2004,
//     },

//     edition: {
//         value: 1
//     },

//     year: {
//         get: function() {
//             return this._year;
//         },

//         set: function(newValue) {
//             if(newValue > 2004) {
//                 this._year = newValue;
//                 this.edition += newValue - 2004;
//             }
//         }

//     }
// })

// var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
// console.log(descriptor.value);

// function Person() {

// } ;
// Person.prototype.name = 'Yadong';
// Person.prototype.age= 26;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function() {
//     console.log(this.name);
// }

// var person1 = new Person();
// console.log(person1);
// console.log('Person.prototype.isProtypeOf(person1) =' + Person.prototype.isPrototypeOf(person1));
// person1.sayName();

// var o = {
//     toString : function(){
//     return "My Object";
// }
// };
// for (var prop in o){
//     if (prop == "toString"){
//     alert("Found toString"); //在 IE 中不会显示
//     }
// }

// // Object.key()
// var keys = Object.keys(Person.prototype);
// console.log('Person.prototype key :' + keys)

// 组合使用构造函数模式与原型模式
function Person(age, name, job) {
    this.name = name;
    this.age = age;
    this.job =job;
    this.friends = ['Mary', 'Lisa']
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name)
    }
}

var person1 = new Person(26, 'Yadong', 'WEB Engnieer');
var person2 = new Person(20, 'Mov', 'WEB Engineer');

person1.friends.push('MM');

console.log('person1.friends:'+ person1.friends);
console.log('person2.friends:'+ person2.friends);
console.log('Person.friends:'+ Person.friends);
