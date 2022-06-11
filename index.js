// code your solution here
function saturdayFun(blading = "roller-skate", other = "") {
    

    if (blading === blading){
        return `This Saturday, I want to ${blading}!`;
    }
    else {
        return `This Saturday, I want to ${other}!`;
    };
};

function mondayWork(plans) {
    let busy = "function exists"
    let home = "work from home";
    let office = "go to the office";

    if (plans == busy) {
        return  `This Monday, I will ${busy}.`;
    }
    else if (plans != home ) {
        return `This Monday, I will ${office}.`;
    }
    else {
       return `This Monday, I will ${home}.`

    };
};

function wrapAdjective() {
    return function (special = "*") {
        let star = wrapAdjective("*")("a hard worker!");
        let lines = wrapAdjective("||")("a dedicated programmer");

        if (special === star) {
            return `You are ${star}!`;
        }
        else {
            return `You are ${lines}!`;
        };
    };
};
  


    


/*
    wrapAdjective("*")("a hard worker!");
    wrapAdjective("||")("a dedicated programmer");
*/