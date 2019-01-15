
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

function divisiblesumpairs (n, k, a) {
	let compls = new Map(),
	count = 0;

	for (let i = 0; i < n; i++) {
		let m = a[i] % k,
			c = (k - m) % k,
			p, q;

		if (p = compls.get(m))
			count += p;
		
		if (q = compls.get(c))
			compls.set(c, ++q);
		else
			compls.set(c, 1);
	}

	return count;
}

function main() {
	let l = readLine().split(' '),
		n = l[0],
		k = l[1],
		a = readLine().split(' ');
	console.log(divisiblesumpairs(n, k, a))
}
