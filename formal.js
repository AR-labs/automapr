/*
//	formal.js
//	Copyright 2010 Pablo Prietz
//	License: See README
*/

/*
//	Formal structure of generator source:
//
//	Ref: |Number|
//	option: [ |String|, |Ref|, ... ]
//
//	{
//		0	: [ |option|, ... ],
//		|Ref|	: [ |option|, ... ], ...
//	}
*/

// Public

exports.generate = function(source)
{
	return handleRef(source,0);
};

// Private

handleRef = function(src, ref)
{
	var options = src[ref];
	var random = (options.length - 1) * Math.random();
	var choosen = Math.round(random);
	return handleOpt(src, options[choosen]);
};

handleOpt = function(src, values)
{
	var sum = "";
	for (val in values)
	{
		var ref = parseInt(values[val], 10);
		if(!isNaN(ref)){
			sum += handleRef(src, ref)
		}
		else{
			sum +=  values[val];
		}
	}
	return sum;
};