var obj = {
	name : 'yome' ,
	say : function () {
		alert('I love ' + this.name);
	}
};

var objB = { name : 'Nikole'};
objB.__proto__ = objA;

var objC = {};
objC.__proto__ = objB;

objC.say();


var Person = function (name) {
	this.name = name;
}
Person.prototype.sayHello = function() {
	alert('Hello ' + this.name);
}
var person = new Person('Nicole')