// // Write a loop that makes seven calls to console.log to output the triangles
// #
// ##
// ###
// ####
// #####
// ######
// #######

// My Solution
var s = "";
for (i=1; i<8; i++) {
	s = s + "#";
	console.log(s);
}

// EJ Solution
// for (var line = "#"; line.length < 8; line += "#")
//   console.log(line);