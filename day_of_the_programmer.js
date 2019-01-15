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

'use strict'

function solve (year) {
	if (year === 1918)
		return '26.09.1918';

	let isleap;
	if (year > 1918)
		isleap = !(year%4 || (!(year%100) && year%400));
	else
		isleap = !(year%4);
	
	return (isleap ? '12.09.' : '13.09.') + year;
}

function main() {
	var year = parseInt(readLine());
	var result = solve(year);
	process.stdout.write(""+result+"\n");
}
