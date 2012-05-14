/*
	Strip with values to multiply
	
	Values:
	• = false
	| = true
	
	Direction:
	true  = right
	false = left
	null = stay
	
	flow elements:
	StateID: [[read, write, direction, nextState], ...]
*/

var turing = require("../Prototyping/turing.js");

var biber1 = {
	  z1: [[false, true, true, "z2"], [true, true, false, "z3"]]
	  , z2: [[false, true, true, "z3"], [true, true, null, "h"]]
	  , z3: [[false, true, false, "z1"], [true, true, false, "z2"]]
	  , h: null
};

var biber2 = {
	  z1: [[false, true, true, "z2"], [true, true, false, "z1"]]
	  , z2: [[false, true, true, "z3"], [true, true, false, "z2"]]
	  , z3: [[false, true, false, "z1"], [true, true, null, "h"]]
	  , h: null
};

var b1 = {
	binaryStrip: true,
	strip: [],
	states: biber1,
	startState: "z1",
	startStripIdx: 1
};

var b2 = {
	binaryStrip: true,
	strip: [],
	states: biber2,
	startState: "z1",
	startStripIdx: 1
};

// main()
function main(biber, name){
	var count = 0;
	console.log(name+":");
	console.log("     Input: " + turing.binaryFormat(biber.strip));
	turing.run(biber, function(currentFlow){
		count++;
	});
	console.log("    Output: " + turing.binaryFormat(biber.strip));
	console.log("Calc Count: " + count);
}

console.log();
main(b1, "biber1");
console.log();
main(b2, "biber2");
console.log();