import { virtual_path } from "../data/virtual_path.js";
import { commands } from "../data/commands.js";

const user_name = "Thomas DEROME";
let current_path = "~/portfolio";
let content = calculate_path();
let entete = `${user_name}:${current_path}$`;

function setup() {
    const input_command = document.getElementById("input_command");
    const entete_command = document.getElementById("entete_command");

    entete_command.innerText = entete;

    // auto focus input
    input_command.addEventListener("focusout", (event) => {
        const input_command = document.getElementById("input_command");
        input_command.focus();
    })

    // analyse the command in real time
    input_command.addEventListener("input", (event) => {
        console.log("command analyse trigger");
        command_analyse(event.target);
    })

    // detect if command is send with enter
    input_command.addEventListener("keydown", (event) => {
        if (event.key == "Enter") {
            console.log("command valid trigger");
            command_valid(event.target);
        }
    })

    console.log("listener load");
}

function command_analyse(element) {
    const input_command = document.getElementById("input_command");

    if (element.value in commands) {
        input_command.classList.remove("unvalid");
        input_command.classList.add("valid");
    } else {    
        input_command.classList.remove("valid");
        input_command.classList.add("unvalid");
    }
}

function calculate_path(path, content) {
    if (path == undefined) {
        return calculate_path(current_path.split("/"), virtual_path)

    } else if (path.length > 0 && path["type"] == "folder") {
        content = content[path[0]]["children"]
        path.splice(0,1)
        return calculate_path(path, content)   

    } else if (path["type"] != "folder") {
        return content
    }
    return content
}

function command_valid(element) {
    if (element.value in commands) {
        let action = commands[element.value]["action"];
        action(entete, element);
    } else if (element.value in virtual_path) {
        let action = virtual_path[element.value]["action"];
        action();
    }

    element.value = ""; 
    const terminal = document.getElementById("terminal");
    terminal.scrollTop = terminal.scrollTopMax;
}

addEventListener("DOMContentLoaded", (event) => { 
    setup();
})