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

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var cl = parseInt(n_temp[2]);
        var cr = parseInt(n_temp[3]);
        var roads = []
        for(var a1 = 0; a1 < m; a1++){
            var city_1_temp = readLine().split(' ');
            var city_1 = parseInt(city_1_temp[0]);
            var city_2 = parseInt(city_1_temp[1]);
            roads[a1] = [city_1, city_2]
        }
        if (cr >= cl) {
          console.log(n * cl)
        } else {
          let lastClusterPtr = 0
          let rs = roads
          //let rs = roads.map((val) => val[0] < val[1] ? val : [val[1], val[0]]).sort((a,b) => a <= b ? -1 : 1)
          let clusters = [new Set(rs[0])]
          for (let i = 0; i < m; i++) {
            let cityA = Math.min(rs[i][0], rs[i][1])
            let cityB = Math.max(rs[i][0], rs[i][1])
            let addedToCluster = false
            for (let j = 0; j <= lastClusterPtr; j++) {
              if (clusters[j].has(cityA)) {
                clusters[j].add(cityB)
                addedToCluster = true
                break;
              } else if (clusters[j].has(cityB)) {
                clusters[j].add(cityA)
                addedToCluster = true
                break;
              }
            }
            if (!addedToCluster) {
              lastClusterPtr++;
              clusters[lastClusterPtr] = new Set()
              clusters[lastClusterPtr].add(cityA)
              clusters[lastClusterPtr].add(cityB)
            }
          }
          console.log((lastClusterPtr + 1) * cl + (n - 1 - lastClusterPtr) * cr)
        }
    }

}

