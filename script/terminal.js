import { virtual_path } from "../data/virtual_path.js";
import { commands } from "../data/commands.js";

const user_name = "Thomas DEROME";
var current_path = "~/portfolio";
var entete = `${user_name}:${current_path}$`;

function setup() {
    const input_command = document.getElementById("input_command");
    const entete_command = document.getElementById("entete_command");

    entete_command.innerText = entete;

    input_command.addEventListener("focusout", (event) => {
        const input_command = document.getElementById("input_command");
        input_command.focus();
    })

    input_command.addEventListener("input", (event) => {
        console.log("command analyse trigger");
        command_analyse(event.target);
    })

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

function command_valid(element) {
    if (element.value in commands) {
        let action = commands[element.value]["action"];
        action(entete, element);

        element.value = "";
        
        const terminal = document.getElementById("terminal");
        console.log(terminal.scrollTopMax)
        terminal.scrollTop = terminal.scrollTopMax;
    }
}

addEventListener("DOMContentLoaded", (event) => { 
    setup();
})