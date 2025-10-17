import { virtual_path } from "../data/virtual_path.js";
import { commands } from "../data/commands.js";

const user_name = "Thomas DEROME";
let current_path = "~/portfolio";
let content = calculate_path();

function setup() {
    const input_command = document.getElementById("input_command");
    const entete_command = document.getElementById("entete_command");

    entete_command.innerText = `${user_name}:${current_path}$`;

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

    if (element.value in commands || element.value in content) {
        input_command.classList.remove("invalid");
        input_command.classList.add("valid");

    } else {    
        input_command.classList.remove("valid");
        input_command.classList.add("invalid");
    }
}

function calculate_path(path, content) { // Fonction recursive pour se déplacer dans le repertoire virtuel
    if (path == undefined) {
        return calculate_path(current_path.split("/"), virtual_path);

    } else if (path.length > 0 && content[path[0]]["type"] == "folder") {
        content = content[path[0]]["children"];
        path.splice(0,1);
        return calculate_path(path, content);   

    } else if (path.length > 0 && content[path[0]]["type"] != "folder") {
        return content;
    }
    return content;
}

function command_valid(element) {
    const data = {"entete": `${user_name}:${current_path}$`, "element": element, "content": content};
    if (element.value in commands) {
        const action = commands[element.value]["action"];
        action(data);

    } else if (element.value in content) {
        if (content[element.value]["type"] == "file") { // If file run file
            let action = content[element.value]["action"];
            action(data);
        } else { // Enter in folder

        }

    } else {
        const history = document.getElementById("history");
        const result = document.createElement("div");
        
        result.innerHTML = `
        <span class="entete_color">${data["entete"]}</span><span class="invalid">  ${data["element"].value}</span><br>
        <span class="invalid">Command invalid</span><br>
        <span class="invalid">Tapez la commande <command>help</command> pour afficher la liste des commands disponibles!</span>
        `;

        history.appendChild(result);
    }

    element.value = ""; 
    document.getElementById("entete_command").textContent = `${user_name}:${current_path}$`;
    const terminal = document.getElementById("terminal");
    terminal.scrollTop = terminal.scrollTopMax;
}

addEventListener("DOMContentLoaded", (event) => { 
    setup();
})