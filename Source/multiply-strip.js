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

var inputSymbols = [false, true, true, false, true, true, true, false];

var flow = {
	  z0: [[true, false, true, "z1"], [false, false, null, "z9"]]
	, z1: [[true, true, true, "z1"], [false, false, true, "z2"]]
	, z2: [[true, false, true, "z3"], [false, false, false, "z7"]]
	, z3: [[true, true, true, "z3"], [false, false, true, "z4"]]
	, z4: [[true, true, true, "z4"], [false, true, false, "z5"]]
	, z5: [[true, true, false, "z5"], [false, false, false, "z6"]]
	, z6: [[true, true, false, "z6"], [false, true, true, "z2"]]
	, z7: [[true, true, false, "z7"], [false, false, false, "z8"]]
	, z8: [[true, true, false, "z8"], [false, true, true, "z0"]]
	, z9: null
};

var multiply = {
	binary: true;
	strip: inputSymbols,
	states: flow,
	startState: "z0",
	startStripIdx: 1
};

function convertStripIntoString(input)
{
	return input.map(function(element){
		return element ? "|" : "•"; 
	}).join("");
};

// main()

var count = 0;
console.log("     Input: " + convertStripIntoString(multiply.strip));
turing.run(multiply, function(currentFlow){
	count++;
	console.log(convertStripIntoString(currentFlow));
});
console.log("    Output: " + convertStripIntoString(multiply.strip));
console.log("Calc Count: " + count);

