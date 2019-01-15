
'use strict'

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
	input_stdin += data;
});

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split("\n");
	main();    
});

function readLine() {
	return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function migratoryBirds(n, ar) {
	let tcounts = [0, 0, 0, 0, 0, 0],
		max, maxtype;
	for (let i = 0; i < n; i++)
		tcounts[ar[i]]++;

	max = tcounts[1];
	maxtype = 1;
	for (let i = 2; i < 6; i++)
		if (tcounts[i] > max) {
			max = tcounts[i];
			maxtype = i;
		}

	return maxtype;
}

function main() {
	var n = parseInt(readLine()),
		ar = readLine().split(' ');
	ar = ar.map(Number);
	var result = migratoryBirds(n, ar);
	process.stdout.write("" + result + "\n");
}