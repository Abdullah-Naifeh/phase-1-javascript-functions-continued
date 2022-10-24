// code your solution here
function saturdayFun( verb = "roller-skate"){
    return `This Saturday, I want to ${verb}!`;
}
console.log(saturdayFun());

function mondayWork(thisMonday = "go to the office"){
    return `This Monday, I will ${thisMonday}.`
}
console.log(mondayWork("work from home"))

function wrapAdjective(flair = "*"){
     return function (innerparam = "special"){
        return `You are ${flair}${innerparam}${flair}!`
    }
}

console.log(wrapAdjective("%")("a dedicated programmer"));