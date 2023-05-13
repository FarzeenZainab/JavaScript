'use strict';


// this function is in global scope
function calcAge(birthYear) {
    const age = 2022 - birthYear;
    
    function printAge(){
        let output = `You are ${firstName}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1980 && birthYear <= 1996){
            const firstName = "Zainab";
            var str = `${firstName}, you are a millenial`;
            console.log(str);
            
            function add(a,b){
                console.log(a + b);
            }

            output = "New Output";
        }
        
        //add(5,6);
        console.log(output);
    }

    printAge();

    return age;
}

const firstName = "Farzeen";
calcAge(1984);
