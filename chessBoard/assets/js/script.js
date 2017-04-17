// Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines. 
// At each position of the grid there is either a space or a "#" character. THe characters should form a chess board.

// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8 and 
// change the program so that it works for any size, the program so that it works for any size,
// outputting a grid of the given width and height.

// My Solution [Need to still solve for odd number of lines]
var x = prompt("How many lines do you want?"); 
var string = "# # # #"
for (i=0; i < x/2; i++) {
	if (x % 2 === 0) {
		console.log(string);
		console.log(" " + string);
	}
};

// EJ Solution

// var size = 8;

// var board = "";

// for (var y = 0; y < size; y++) {
//   for (var x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0)
//       board += " ";
//     else
//       board += "#";
//   }
//   board += "\n";
// }

// console.log(board);