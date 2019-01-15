
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

function bonAppetit(n, k, b, ar) {
	let ba = 0,
		diff;

	for (let i = 0; i < n; i++) {
		if (i===k)
			continue;
		ba += ar[i]
	}

	ba /= 2

	if (diff = b - ba)
		return diff;

	return 'Bon Appetit';
}

function main() {
	var n_temp = readLine().split(' ');
	var n = parseInt(n_temp[0]);
	var k = parseInt(n_temp[1]);
	var ar = readLine().split(' ');
	ar = ar.map(Number);
	var b = parseInt(readLine());
	var result = bonAppetit(n, k, b, ar);
	process.stdout.write("" + result + "\n");
}