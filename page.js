function teamname(team){
    console.log("We are " + team);
}
teamname("4Ns");

function teammate(name){
    console.log("She is " + name)
}
teammate("Gilim");
teammate("Yeonsoo");
teammate("Jihyun");
teammate("Haeun");
teammate("Sein");


function guess(numb){
    if (number<10) {
        console.log("Too low");
    } else if (number>10) {
        console.log("Too high");
    } else {
        return number;
    }
}

const number = parseInt(prompt("Guess the number:"));
guess(number)