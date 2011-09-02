handleRef = function(dic, ref)
{
	var options = dic[ref];
	var choosen ;
	return handleOpt(dic, choosen);
};

handleOpt = function(dic, values)
{
	var sum = "";
	for (val in values)
	{
		var ref = parseInt(values[val], 10);
		if(!isNaN(ref)){
			sum += handleRef(dic, ref)
		}
		else{
			sum +=  values[val];
		}
	}
	return sum;
};

exports.generate = function(dic)
{
	return handleRef(dic,0);
};

var formal = require("./formal.js");
var P = {
	0: [ [1,"!"] ],
	1: [ [2], [",",2] ],
	2: [ [3,"ja"] ],
	3: [ [4], [4,"u"], [3,"u"] ],
	4: [ [5,"lu"], [8,"lu"] ],
	5: [ [6,"le"], [6,"le"] ],
	6: [ [7,"l"] ],
	7: [ [8,"ha"], [7,"ha"] ],
	8: [  ]
};

console.log(formal.generate(P));
