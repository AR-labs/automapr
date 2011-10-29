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

exports.run = function(input, step)
{
	step(input.strip);
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
	if (read === undefined || read === null) read = false; // reset
	
	for (var i = 0; i < transitions.length; i++)
	{
		if (read === transitions[i][0]) // check if right transition
		{
			machine.strip[position] = transitions[i][1]; // write to strip

			step(machine.strip);

			transitions[i][2] ? position++ : position--; // right or left
			handle(machine, transitions[i][3], position, step);
			break;
		}
	}
}