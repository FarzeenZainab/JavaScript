//Strict mode helps us making less errors in our code. It will tell us the errors that without strict mode JS will simply ignore
'use strict'

//Strict mode can be global and blocked scope
x = 12; //without scrict mode JS will not show any errors and will create a new globle variable

function example(p1, p1){
    //strict mode will also not let you repeat the parameter in the function

    'use strict'
    
    //blocked scope strict mode
    y = 121; //without strict mode active JS will create a local variable in this function
}

example();