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

alert(person.name);
person.name = "Greg";
alert(person.name);