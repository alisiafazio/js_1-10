function sleepIn(weekday,holiday) {
    if(weekday == true && holiday == true){
        return true;
    }
    if(weekday == true && holiday == false){
        return false;
    }
    if(weekday == false && holiday == false){
        return true;
    }
    if(weekday == false && holiday == true){
        return true;
    }
}

function monkeyTrouble(a_smile, b_smile) {
    if (a_smile == true && b_smile == true){
        return true;
    }
    if (a_smile == true && b_smile == false){
        return false;
    }
    if (a_smile == false && b_smile == true){
        return false;
    }
    if (a_smile == false && b_smile == false){
        return true;
    }
}

function stringTimes(string, n){
    var answer = "";
    for (var i = 0; i <= n; i++){
        answer += string;
    }
    return answer;
}

function frontTimes(front, n){
    var answer = "";
    var str = front.substring(0,3);
    for (var i = 1; i <= n; i++){
         answer += str;
    }
    return answer;
}

function stringBits(string){
    var answer = "";
    for (var i = 0; i < string.length; i += 2){
        answer = answer + string[i];
    }
    return answer;
}

function caughtSpeeding(speed, birthday){
    if (speed <= 60 && birthday == true){
        return 0;
    }
    if (speed <= 60 && birthday == false){
        return 0;
    }
    if (65 >= speed > 60 && birthday == true){
        return 0;
    }else{
        return 1;
    }
    if (80 >= speed >= 66 && birthday == true){
        return 1;
    }
    if (80 >= speed >= 66 && birthday == false){
        return 1;
    }
    if (speed >= 81 && birthday == true){
        return 2;
    }
    if (speed >= 81 && birthday == false){
        return 2;
    }
}

function fizz_buzz(number){
    if (number % 3 == 0 && number % 5 == 0){
        return  "FizzBuzz!";
    }
    if (number % 3 == 0){
        return  "Fizz!";
    }
    if (number % 5 == 0){
        return  "Buzz!";
    }else{
        return number + "!"
    }
}

function teaParty(candy, tea){
    if (candy < 5 || tea < 5){
        return 0;
    }
    if (candy >= 2*tea || tea  >= 2*candy){
        return 2;
    }
    if (candy >= 5 && tea >= 5){
        return 1;
    }
}

function blackjack(numOne, numTwo){
    numOne > 0;
    numTwo > 0;
    if (numOne > 21 && numTwo > 21){
        return 0;
    }
    if (numOne > numTwo && numOne <= 21){
        return numOne;
    }
    if (numTwo > numOne && numTwo <= 21){
        return numTwo;
    }
    if (numTwo > 21){
        return numOne;
    }
    if (numOne > 21){
        return numTwo;
    }
}

function loneSum(a, b, c){
    if (a == b && b ==c){
        return 0;
    }
    if (a == b){
        return c;
    }
    if (a == c){
        return b;
    }
    if (c == b){
        return a;
    }else{
        return a + b + c;
    }
}

function tester() {
    document.getElementById("output").innerHTML = sleepIn(true, false);
    document.getElementById("output1").innerHTML = monkeyTrouble(false, false);
    document.getElementById("output2").innerHTML = stringTimes('Hi', 2);
    document.getElementById("output3").innerHTML = frontTimes('Chocolate', 3);
    document.getElementById("output4").innerHTML = stringBits('Hello');
    document.getElementById("output5").innerHTML = caughtSpeeding(65, true);
    document.getElementById("output6").innerHTML = fizz_buzz(15);
    document.getElementById("output7").innerHTML = teaParty(8, 16);
    document.getElementById("output8").innerHTML = blackjack(21, 19);
    document.getElementById("output9").innerHTML = loneSum(1, 3, 4);

}