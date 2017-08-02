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

var book = {};
Object.defineProperties(book, {
    _year: {
        value: 2004,
    },

    edition: {
        value: 1
    },

    year: {
        get: function() {
            return this._year;
        },

        set: function(newValue) {
            if(newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }

    }
})

var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log(descriptor.value);