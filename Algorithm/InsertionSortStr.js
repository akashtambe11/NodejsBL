var read = require('readline-sync');
var util = require('../Utility/AlgorithmUtility');

insStrMain = () => {
    console.log("Enter the size of an Array")
    var size = util.integerInput();

    var arr = util.arrayStrElementInput(size);

    var InsSortedArr = util.insertionSortString(arr);
    console.log("Sorted Array = "+InsSortedArr);
}
insStrMain();
