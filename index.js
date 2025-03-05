function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork();

function wrapAdjective(symbol){
    const innerFunction = function(adjective){
        return `You are ${symbol}${adjective}${symbol}!`;
    }
    return innerFunction;
}
wrapAdjective()();