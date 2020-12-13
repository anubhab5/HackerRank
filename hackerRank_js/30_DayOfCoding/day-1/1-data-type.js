function main() {
    var i = 4;
    var d = 4.0;
    var s = "HackerRank ";
    // Declare second integer, double, and String variables.
    let intVal, doubleVal, stringVal;
    // Read and save an integer, double, and String to your variables.
    intVal = 12;
    doubleVal = 4.0;
    stringVal = "is the best place to learn and practice coding!";
    // Print the sum of both integer variables on a new line.
    console.log(i + intVal);
    // Print the sum of the double variables on a new line.
    console.log((d + doubleVal).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + stringVal);
}

main();