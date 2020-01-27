/*
 * Project: Easy Calculator
 * Copyright: Jakir Hossen (jshossen01@gmail.com)
 * Version: 1.0.0
 * Author: Jakir Hossen
 */
module.exports.myCalculator = function() {
    this.add = (a,b) => {
        return a+b;
    }
    this.subtract = (a,b) => {
        return a-b;
    }
    this.multiply = (a,b) => {
        return a*b;
    }
    this.divide = (a,b) => {
        return a/b;
    }
};