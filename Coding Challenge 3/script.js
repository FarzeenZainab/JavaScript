'use strict'
const Mark ={
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69, 
    calcBMI: function (){
        return this.BMI = this.mass / (this.height ** 2);
    },
}


const john ={
    fullname: 'John Smith',
    mass: 78,
    height: 1.95, 
    calcBMI: function (){
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    },
}

// we need to explicity call the calc bmi function to get the result because our this.BMI expression will not set if we donot call the function. This is because our this.BMI property is inside our calcBMI function.

Mark.calcBMI();
john.calcBMI();

if(Mark.BMI > john.BMI){
    console.log(`${Mark.fullname} has higher BMI i.e. ${Mark.BMI}`);
} else{
    console.log(`${john.fullname} has higher BMI i.e. ${john.BMI}`);
}

