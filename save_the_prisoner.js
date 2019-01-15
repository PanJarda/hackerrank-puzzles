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

function lastpris (n, m, s) {
	return (m + s - 2) % n + 1;
}

function main () {
	let t = parseInt(readLine()),
		l, n, m, s;

	while (t--) {
		l = readLine().split(' ').map(v=>parseInt(v));
		n = l[0];
		m = l[1];
		s = l[2];

		console.log(lastpris(n, m, s));
	}
}

