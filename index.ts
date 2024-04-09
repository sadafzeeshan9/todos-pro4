#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;

console.log(chalk.magenta.bold(" \n \t  welcome to code wiyh sadafzeeshan   \n"))



while (condition) {
  let addTask = await inquirer.prompt([
   
   
    { name: "task", 
      type: "input", 
      message: chalk.red("Enter your new task") 
    },

    
  ]);

  

  todoList.push(addTask.task);
  
    console.log(`${addTask.task} task added in Todo-List successfully`);

  let addMoreTask = await inquirer.prompt([
    
     { name: "addmore",
       type: "confirm",
       message:chalk.blue("do you want to add more task ?"),
       default: "true"
     },
    
    ]);
    condition = addMoreTask.addmore

}

console.log("your todo-list", todoList)
