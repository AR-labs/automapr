/*
	Turing implementation
	
	Values: [true|false]
	
	Direction:
		[true |false]
		[right|left ]
	
	flow elements:
		{StateID: [transition, ...]}
	
	transition:
		[read, write, direction, nextState]
*/

exports.binaryFormat = function(input)
{
	return input.map(function(element){
		return element ? "|" : "•"; 
	}).join("");
};

exports.valueFormat = function(input)
{
	return input.join("");
};

exports.run = function(input, step)
{
	handle(input, input.startState, input.startStripIdx, step)
};

function handle(machine, state, position, step)
{
	
	var transitions = machine.states[state]; // read possible transitions
	if (transitions === undefined || transitions === null)
	{
		// final state
		step(machine.strip);
		return;
	}
	
	var read = machine.strip[position]; // read strip
	if (read === undefined || read === null) read = ""; // reset
	
	for (var i = 0; i < transitions.length; i++)
	{
		if (read === transitions[i][0]) // check if right transition
		{
			machine.strip[position] = transitions[i][1]; // write to strip

			step(machine.strip);

			if (transitions[i][2] !== undefined || transitions[i][2] !== null)
			{
				transitions[i][2] ? position++ : position--; // right or left
			}
			handle(machine, transitions[i][3], position, step);
			break;
		}
	}
}