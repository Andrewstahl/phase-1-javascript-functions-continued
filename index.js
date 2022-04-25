// code your solution here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = "go to the office") {
  return `This Monday, I will ${work}.`;
}

function wrapAdjective(wrapString = '*') {
  return function(string = 'special') {
    return `You are ${wrapString}${string}${wrapString}!`;
  }
}

console.log(wrapAdjective('!!!')());