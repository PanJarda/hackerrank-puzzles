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
/*
 * Euclidean algorithm recursive
 */
function computeGCD (positiveIntA, intB) {
  if (intB === 0) {
    return positiveIntA
  } else {
    let modulus = positiveIntA % intB
    return computeGCD(intB, modulus)
  }
}

function computeLCM (positiveIntA, positiveIntB) {
  return (positiveIntA * positiveIntB) / computeGCD(positiveIntA, positiveIntB)
}

function computeGCDOfSet (setA) {
  var res = setA[0]
  for (var i = 1; i < setA.length; i++) {
    res = computeGCD(res, setA[i])
  }
  return res
}

function computeLCMOfSet (setA) {
  var res = setA[0]
  for (var i = 1; i < setA.length; i++) {
    res = computeLCM(res, setA[i])
  }
  return res
}

function countTotalXBetween (setA, setB) {
  let lcmOfSetA = computeLCMOfSet(setA)
  let gcdOfSetB = computeGCDOfSet(setB)
  let countOfXBetween = 0
  for (var i = lcmOfSetA, j = 2; i<=gcdOfSetB; i=lcmOfSetA*j, j++) {
    if (gcdOfSetB % i === 0) countOfXBetween++;
  }
  return countOfXBetween
}

function main() {
    var n_temp = readLine().split(' ');
    let n = parseInt(n_temp[0]);
    let m = parseInt(n_temp[1]);
    setA = readLine().split(' ');
    setA = setA.map(Number);
    setB = readLine().split(' ');
    setB = setB.map(Number);
    let totalXBetweenSets = countTotalXBetween(setA, setB);
    process.stdout.write("" + totalXBetweenSets + "\n");

}

