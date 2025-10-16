    const COMMAND = {"ls": "test"};

const USER_NAME = "Thomas DEROME";
const CURRENT = `${USER_NAME}:~/portfolio$`;

function setup() {
    const input_command = document.getElementById("input_command");
    const entete_command = document.getElementById("entete_command");

    entete_command.innerText = CURRENT;

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

    if (element.value in COMMAND) {
        input_command.classList.remove("unvalid");
        input_command.classList.add("valid");
    } else {    
        input_command.classList.remove("valid");
        input_command.classList.add("unvalid");
    }
}

function command_valid(element) {
    const history = document.getElementById("history")
    if (element.value in COMMAND) {
        console.log(COMMAND[element.value]);
    }
}

addEventListener("DOMContentLoaded", (event) => { 
    setup();
})