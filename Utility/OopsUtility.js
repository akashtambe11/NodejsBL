/**
 * @description Dependencies are required to be install before execution of this file.
 */
var fs = require('fs');
var algoUtil = require('../Utility/AlgorithmUtility')


module.exports = {

    /**
    * @method regExApply() - To perform regular expression opertaion on string.
    */
    regExApply(para, name, fullName, mobileNo){
        try{
             
            if(para == undefined || para == null || para.length == 0 || name == undefined || name == null || name.length == 0 || fullName == undefined || fullName == null || fullName.length == 0 || mobileNo == undefined || mobileNo == null || mobileNo.length == 0)                 
                                    throw "input should not be undefined or null"
         }
         catch(e){
             return e;
         }
        /**
         * @description RegEx condtions for name full name and mobile number.
         */
        var nameRe = /^[a-zA-Z]+$/;
        var fNameRe = /(\w.+\s).+/;
        var MobRe = /^([+]\d{2}[ ])?\d{10}$/;

        var checkName = nameRe.test(name);
        if(checkName == true){
            /**
             * @description Replacing Name.
             */
            para = para.replace('<<name>>', name);
        }

        var checkFullName = fNameRe.test(fullName);
        if(checkFullName == true){
             /**
             * @description Replacing Full Name.
             */
            para = para.replace('<<full name>>', fullName);
        }

        var checkmob = MobRe.test(mobileNo);
        if(checkmob == true){
             /**
             * @description Replacing Mobile Number.
             */
            para = para.replace('xxxxxxxxxx', mobileNo);
        }

        console.log(para);
        
    },

    /**
    * @method invData() - To manage inventory data..
    */
    invData(){
        var jsonData = fs.readFileSync(__dirname + "/JsonFiles/Inventory.json");

        var inventory = JSON.parse(jsonData);
        // console.log(inventory);
    
        console.log("\n1. Rice \n2. Pulses \n3. Wheat \n4. Exit");
        console.log("\nEnter your choice");

        var choice = parseInt(algoUtil.integerInput());
        
        switch(choice){
            case 1:
                console.log("\nEnter weight (kg) to purchase Rice");
                var weight = parseInt(algoUtil.integerInput());
                /**
                 * @description To purchase rice.
                 */
                for(let i = 0; i < inventory.Rice.length; i++){
                    console.log("\nRice: " +inventory.Rice[i].name+ " \tPrice per Kg: " +inventory.Rice[i].price+ " Rs.\nCost for " +weight+ " Kg = " +weight * inventory.Rice[i].price+ " Rs.\n");
                }
                break;


            case 2:
                console.log("\nEnter weight (kg) to purchase Pulses");
                var weight = parseInt(algoUtil.integerInput());
                 /**
                 * @description To purchase pulses.
                 */
                for(let i = 0; i < inventory.Pulses.length; i++){
                    console.log("\nPulses: " +inventory.Pulses[i].name+ " \tPrice per Kg: " +inventory.Pulses[i].price+ " \nCost for " +weight+ " Kg = " +weight * inventory.Pulses[i].price+ " Rs.\n");
                }
                break;


            case 3:
                console.log("\nEnter weight (kg) to purchase Wheat");
                var weight = parseInt(algoUtil.integerInput());
                 /**
                 * @description To purchase wheat.
                 */
                for(let i = 0; i < inventory.Wheat.length; i++){
                    console.log("\Wheat: " +inventory.Wheat[i].name+ " \tPrice per Kg: " +inventory.Wheat[i].price+ " \nCost for " +weight+ " Kg = " +weight * inventory.Wheat[i].price+ " Rs.\n");
                }
                break;

            case 4:
                return;

            default:
                console.log("Invalid Input (Range 1 - 4)");

        }
    }

}