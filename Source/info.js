var formal = require("../Prototyping/formal.js");

var info = {
	0: [ ["Der ",2,"ist ein ",3,2,"der ",4] ],
	2: [ ["Nerd "], ["Mensch "], ["Troll "] ],
	3: [ ["kauziger "], ["skuriler "], ["eigenwilliger "] ],
	4: [ ["menschelt."], ["nerdet."], ["trollt."] ]
}

for (var i = 0; i < Math.random()*10; i++)
console.log(formal.generate(info));