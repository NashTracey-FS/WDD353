
//import Node
const fs = require("fs");

const readline = require('readline');

const grader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//function to convert numerical grade to letter grade
function alphaGrade(input){
    let grade = Number(input)
    let letter ="Invalid Input! Try again"
    if(grade >= 90 ){ 
        letter = "A"
    }else if(grade >= 80 ){
        letter ="B"
    }else if(grade >= 70){
        letter ="C"
    }else if(grade >= 60){
        letter ="D"
    }else if(grade >= 50){
        letter ="F"
    }
    return letter
}
//Get user input and display results
grader.question("What is the student's name? ", (name)=>{
    console.log(name);
    grader.question("What is the assignment called? ", (assignment)=>{
       console.log(assignment)
       grader.question("What is the numeric grade?",(grade)=>{
           let lGrade = alphaGrade(grade)
           console.log(name+" got a/an "+lGrade+" on "+ assignment+"!")
           process.exit(0)
       })
    })
})

