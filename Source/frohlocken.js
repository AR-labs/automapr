var formal = require("../Prototyping/formal.js");

// recursive maximum
var hosianna = {
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
	0: [ [1,"!"], [1,", ",0] ], // 1x, nx
	1: [ [2,"l",3, "lu", 4, "ja"], ["lu", 4, "ja"] ], // 1x
	2: [ ["ha"], ["ha", 2] ], // 1x, nx
	3: [ ["le"], ["le", 3] ], // 1x, nx
	4: [ [""], ["u"], ["u", 4] ] // 0x, 1x, nx
};

for (i = 0; i < 10; i++)
{
	console.log(formal.generate(halleluja));
}