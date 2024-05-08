#! /usr/bin/env node

import inquirer from "inquirer";


const randomnumber:number = Math.floor(Math.random() * 10);

const answer = await inquirer.prompt([
    {
        name:"userguess",
        type:"number",
        message:"please guess a number between 1 to 9: ",

    },
])
if(answer.userguess === randomnumber){
    console.log("you guessed it right");
}
else{
    console.log("you guessed it wrong");
}