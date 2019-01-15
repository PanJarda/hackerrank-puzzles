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

function getMoneySpent (s, n, m, kboards, drives) {
	let kasc = kboards.sort((a,b) => a - b),
		ddesc = drives.sort((a,b) => b - a),
		max = -1,
		sum,
		i = 0,
		j = 0;

	do {
		if ((sum = kasc[i] + ddesc[j]) == s)
			return sum;

		if (sum < s) {
			if (sum > max)
				max = sum;
			i++;
		} else {
			j++;
		}
	} while (i < n && j < m);

	return max;
}

function main() {
	var s_temp = readLine().split(' ');
	var s = parseInt(s_temp[0]);
	var n = parseInt(s_temp[1]);
	var m = parseInt(s_temp[2]);
	var keyboards = readLine().split(' ');
	keyboards = keyboards.map(Number);
	var drives = readLine().split(' ');
	drives = drives.map(Number);
	//  The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
	var moneySpent = getMoneySpent(s, n, m, keyboards, drives);
	process.stdout.write(""+moneySpent+"\n");

}

