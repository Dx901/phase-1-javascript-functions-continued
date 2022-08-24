// code your solution here
let activity;
function saturdayFun(activity ) {
    if (activity) {
        return `This Saturday, I want to ${activity}!`}
    else{
        return 'This Saturday, I want to roller-skate!'
    }

}
//
let mondayActivity;
function mondayWork(mondayActivity) {
    if (mondayActivity) {
        return `This Monday, I will work from home.`
    }
    else{
        return 'This Monday, I will go to the office.'
    }
}
//
function wrapAdjective(symbol='*'){
    return function(word = "special") {
        return `You are ${symbol}${word}${symbol}!`
        
    }

}

//Not sure if by introducing them as let is the right thing
//You may advice further
