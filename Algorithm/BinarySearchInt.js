var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

var size = parseInt(read.question("Enter the Size of an Array\n"));

var arr = util.arrayIntElementInput(size);
var key = read.question("Enter the Search Key in Array\n");

util.binarySearchInteger(arr, key);
