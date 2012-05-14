/*
	Strip with values to multiply
	
	Direction:
	true  = right
	false = left
	null = stay
	
	flow elements:
	StateID: [[read, write, direction, nextState], ...]
*/

var turing = require("../Prototyping/turing.js");

var right = true, left = false;

var testTM = {
	  z1: [	["a", "b", right, "z1"],
	  	["b", "c", right, "z1"],
	  	["c", "a", right, "z1"],
	  	["", "", null, "z2"]]
	  , z2: null
};

var test = {
	binaryStrip: true,
	strip: ["a","b","c"],
	states: testTM,
	startState: "z1",
	startStripIdx: 0
};

var count = 0;
console.log("     Input: " + turing.valueFormat(test.strip));
turing.run(test, function(currentFlow){
	count++;
});
console.log("    Output: " + turing.valueFormat(test.strip));
console.log("Calc Count: " + count);