//two teams coallas and the dolphins

/*
    Each team competes 3 times, and then the average of
    the three scores are calculated (so one avergae score per
        team).

    A team only wins if it has at least double the average score
    of the other team. Other wise no team wins.

    1. Create an arrow function which calculates the average of 
    of 3 scores.
    
    2.Use the function to calculate the average for both teams

    3. Create a function 'checkwinner' that takes the average score of 
    each team as a paramerter and then log the winner to the console, 
    together with the victory points, according to the above rules.

    4. Use the 'checkwinner' function to determine the winner for both 
    data 1 and data 2

    5.Ignore draws this time

    Test data 1 : Dolphins score 44, 23, and 71. Koalas scores 65, 54 and 49

    Test data 2 : Dolphins score 85, 54, and 41. Koalas scores 23, 34 and 27

*/

'use strict'

const teamAvg = (score1, score2, score3) => (score1 + score2 + score3)/3;

const dolphinsAvg = teamAvg( 85, 54, 41);
const koalasAvg = teamAvg(23, 34, 27);

const double = avgScore =>{
    return avgScore * 2
}

winner(dolphinsAvg, koalasAvg);

function winner(team1Avg, team2Avg){
    if(team1Avg > double(team2Avg))
    {
        console.log(`Dolphins are the winners! Their average score is ${team1Avg}`);
    }

    else if(team2Avg > double(team1Avg))
    {
        console.log(`Dolphins are the winners! Their average score is ${team2Avg}`);
    }

    else
    {
        console.log(`No team wins`);
    }
}