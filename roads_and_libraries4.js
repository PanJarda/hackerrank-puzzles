
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

function mkadjlst (edges) {
	let al = new Map();

	for (let e of edges) {
		let from, to, i, p, q;

		for (i=0; i<2; i++) {
			from = e[i];
			to = e[(i+1)%2];

			if (p = al.get(from))
				p.adjs.add(to);
			else
				al.set(from, {
					adjs: new Set([to]),
					visited: 0
				});
		}
	}

	return al;
}

function dfs (adjl, node) {
	let n = adjl.get(node);

	if (n.visited)
		return;

	n.visited = 1;

	for (let a of n.adjs)
		dfs(adjl, a);
}

function concompc (adjl) {
	let ncc = 0,
		nl = adjl.keys();

	for (let n of nl) {
		if (adjl.get(n).visited)
			continue;
		ncc++;
		dfs(adjl, n);
	}

	return ncc;
}

function main() {
	let q = parseInt(readLine());
	for (var a0 = 0; a0 < q; a0++) {
		var n_temp = readLine().split(' ');
		var n = parseInt(n_temp[0]);    /* num of cities */
		var m = parseInt(n_temp[1]);    /* num of roads */
		var cl = parseInt(n_temp[2]);   /* cost of library */
		var cr = parseInt(n_temp[3]);   /* cost of road */
		var roads = []
		for (var a1 = 0; a1 < m; a1++){
			var city_1_temp = readLine().split(' ');
			var city_1 = parseInt(city_1_temp[0]);
			var city_2 = parseInt(city_1_temp[1]);
			roads[a1] = [city_1, city_2]
		}

		if (cr >= cl) {
			console.log(n*cl);
		} else {
			let al = mkadjlst(roads),
				ncc = concompc(al),
				nuc = n - al.size,
				mincost = nuc*cl + ncc*cl + (n - nuc - ncc)*cr;
			console.log(mincost);
		}
	}
}
