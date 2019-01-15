
'use strict'

function countValleys (n, steps) {
	let alt = 0,
		count = 0;

  for (let i = 0; i < n; i++) {
  	if (steps.charAt(i) === 'U') {
  		if (alt === -1)
  			count++;
  		alt++;
  	} else {
  		alt--;
  	}
  }

  return count;
}

function processInput (input) {
	let lines = input.split('\n'),
		n = lines[0],
		steps = lines[1],
		valleysc = countValleys(n, steps);
		process.stdout.write(valleysc.toString() + '\n');
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
	processInput(_input);
});
