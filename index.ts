#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] = [];
let conditions = true;

// Print Wellcome message
console.log(chalk.magenta("\n \t (UPDATED VERSION OF TODO-LIST APPLICATION)\n"));

let main =  async() => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name:"choice",
                type:"list",
                message:"Select an Option youu want to do",
                choices:["Add Task","Delete Task","Update Task","View Todo-List","Exit"],
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()

        }
        else if (option.choice === "Delete Task"){
            await deleteTask()
        }
        else if (option.choice === "Update Task"){
            await updateTask()

        }
        else if(option.choice === "View Todo-List" ){
            await viewTask()

        }
        else if(option.choice === "Exit"){
            conditions = false;

        }
    }
}
//  Function to add new taskto the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter your new Task"
            
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} Task added successfully in Todo-List`);
  
}

// Function to view all todo-list Tasks

let viewTask = () => {
    console.log("\n Your Todo-List \n")
    todoList.forEach(( task, index) => {
        console.log(`${index + 1}:${task}`)
    })


}
// Function to delete a task from the list
let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the `index no` of the task you want to delete:",
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.indexm -1, 1);
    console.log(`\n${deleteTask} This Task has been Deleted Succesfully from your Todo-List`)
}

// Function to update a Task
let updateTask = async() =>{
    await viewTask()
    let update_Task_index = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter The `Index no` of the Task you want to Update"
        },
        {
            name:"new_task",
            type:"input",
            message:"Now Enter new task Name"
        }
    ]);
    todoList[update_Task_index.index - 1] = update_Task_index.new_task
    console.log(`\n{Task at Index no. ${update_Task_index.index - 1}
    Updated Successfully [for updated list check option:"view Todo-List"]`)
}
main();




















