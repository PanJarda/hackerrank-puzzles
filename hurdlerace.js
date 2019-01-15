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

function hurdlerace (n, k, hurdles) {
	let minb = 0,
		dif;

	for (let h of hurdles) {
		if ((dif = h - k) > 0) {
			minb += dif;
			k += dif;
		}
	}

	return minb;
}

function main() {
	let l = readLine().split(' '),
		n = parseInt(l[0]),
		k = parseInt(l[1]),
		hurdles = readLine().split(' ').map(v => parseInt(v));

	console.log(hurdlerace(n, k, hurdles));
}
