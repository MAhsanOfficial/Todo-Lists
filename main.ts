#! /usr/bin/env

import inquirer  from "inquirer";
let todos = [];
let condition:boolean = true;

while(condition){
let addTask = await inquirer.prompt([
    {
        name:"todo",
        type:"input",
        message:"What you Want to Add in your Todos ?",
    },
    {
        message:"Do you want to Add more ?",
        name:"addMore",
        type:"confirm",
        default:"false",
    }


]);

todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos);
};
