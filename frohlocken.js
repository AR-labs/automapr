var formal = require("./formal.js");

// recursive maximum
var hossiana = {
	0: [ [1,"!"] ],
	1: [ [2], [2,", ",1] ],
	2: [ [3,"ja"] ],
	3: [ [4], [4,"u"], [3,"u"] ],
	4: [ [5,"lu"], ["lu"] ],
	5: [ [6,"le"], [5,"le"] ],
	6: [ [7,"l"] ],
	7: [ ["ha"], [7,"ha"] ]
};

// recursive minimum
var halleluja = {
	0: [ [1,"!"], [1,", ",0] ],
	1: [ [2,"l",3, "lu", 4, "ja"], ["lu", 4, "ja"] ],
	2: [ ["ha"], ["ha", 2] ],
	3: [ ["le"], ["le", 3] ],
	4: [ [""], ["u"], ["u", 4] ]
};

for (i = 0; i < 10; i++)
{
	console.log(formal.generate(halleluja));
}