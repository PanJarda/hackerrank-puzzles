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

function solve (n, p){
	let r = p / 2
	if (4*r < n)
		return Math.floor(r)
	else if (n % 2)
		return Math.floor(n/2 - r)
	else
		return Math.ceil(n/2 - r)
}

function main() {
	var n = parseInt(readLine());
	var p = parseInt(readLine());
	var result = solve(n, p);
	process.stdout.write(""+result+"\n");
}
