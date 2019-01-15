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

function catsAndMouse (x, y, z) {
	let adst = Math.abs(z - x),
		bdst = Math.abs(z - y);

	if (adst < bdst)
		return 'Cat A';
	else if (adst > bdst)
		return 'Cat B';

	return 'Mouse C';
}

function main() {
	let q = readLine(),
		i = 0,
		query, x, y, z;
	
	while (i<q) {
		query = readLine().split(' ');
		x = query[0];
		y = query[1];
		z = query[2];
		console.log(catsAndMouse(x, y, z));
		i++;
	}
}
