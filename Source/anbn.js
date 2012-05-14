var formal = require("../Prototyping/formal.js");

var anbn = {
	0: [ ["a",0,"b"], ["ab"] ],
}

var d = {
	0: [ ["a",1], ["b",2] ],
	1: [ ["a",1], ["b",1], [""] ],
	2: [ ["b",2], ["a",3], ["a"]],
	3: [ ["a"], ["a",3], ["b",2] ]
}

console.log(formal.generate(d));