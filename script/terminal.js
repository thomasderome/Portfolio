import { virtual_path } from "../data/virtual_path.js";
import { commands } from "../data/commands.js";

class Terminal {
    constructor(user_name, current_path) {
        this.user_name = user_name;
        this.current_path = current_path;
        this.content = this.calculate_path(current_path);

        const input_command = document.getElementById("input_command");
        let tab_memory = null;

        this.update_entete();

        // auto focus input
        input_command.addEventListener("focusout", () => {
            const input_command = document.getElementById("input_command");
            input_command.focus({preventScroll: true});
        })

        // analyse the command in real time
        input_command.addEventListener("input", (event) => {
            tab_memory = null;
            this.command_analyse(event.target.value);
        })

        // detect if command is send with enter
        input_command.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                tab_memory = null;
                this.command_valid(event.target);
            } else if (event.key === "Tab" && !tab_memory) {
                event.preventDefault();
                input_command.focus();

                let auto_completion_list= []
                for (const command_key of Object.keys(commands)) {
                    auto_completion_list.push(`${command_key}`);
                }
                for (const file of Object.keys(this.content)) {
                    if (this.content[file]["type"] === "file") {
                        auto_completion_list.push(`${file}`);
                    }
                }

                const command_start = input_command.value;
                let verify = true;
                for (const value of auto_completion_list) {
                    verify = true;
                    for (let index_let = 0; index_let < command_start.length; index_let++) {
                        if (command_start[index_let] !== value[index_let]) {
                            verify = false;
                            break
                        }
                    }
                    if (verify) {
                        if (!tab_memory) tab_memory = [];
                        tab_memory.push(value);
                    }
                }

                if (tab_memory) {
                    input_command.value = tab_memory[0];
                    this.command_analyse(tab_memory[0]);
                    tab_memory.push(tab_memory.splice(0,1).join());
                }

            } else if (event.key === "Tab" && tab_memory) {
                event.preventDefault();

                input_command.value = tab_memory[0];
                this.command_analyse(tab_memory[0]);

                tab_memory.push(tab_memory.splice(0,1).join());
            }
        })
    }

    update_entete() {
        const entete_command = document.getElementById("entete_command");
        entete_command.innerText = `${this.user_name}:${this.current_path}$`;
    }

    command_analyse(value) {
        const input_command = document.getElementById("input_command");
        let command_split = value.split(" ", 1)[0];

        if (command_split in commands || command_split in this.content) {
            input_command.classList.remove("invalid");
            input_command.classList.add("valid");

        } else {
            input_command.classList.remove("valid");
            input_command.classList.add("invalid");
        }
    }

    calculate_path(path, content) { // Fonction recursive pour se déplacer dans le repertoire virtuel
        if (typeof(path) == "string") {
            return this.calculate_path(this.current_path.split("/"), virtual_path);

        } else if (path.length > 0 && path[0] in content && content[path[0]]["type"] === "folder") {
            content = content[path[0]]["children"];
            path.splice(0,1);
            return this.calculate_path(path, content);

        } else if (path.length > 0 && path[0] in content && content[path[0]]["type"] !== "folder") {
            return content;
        }
        return content;
    }

    command_valid(element) {
        const command_split = element.value.split(" ");

        const data = {entete: `${this.user_name}:${this.current_path}$`,
            element: command_split[0],
            argument: command_split.slice(1, command_split.length),
            this: this};

        if (data["element"] in commands) {
            const action = commands[data["element"]]["action"];
            const response = action(data);

            if (typeof(response) == "object" && "path" in response) {
                this.current_path = response["path"];
                this.content = this.calculate_path(this.current_path);
                this.update_entete();
            }

        } else if (data["element"] in this.content) {
            if (this.content[data["element"]]["type"] === "file") { // If file run file
                let action = this.content[data["element"]]["action"];
                action(data);
            } else { // Enter in folder

            }

        } else {
            const history = document.getElementById("history");
            const result = document.createElement("div");

            if (element.value === "") result.innerHTML = `<span class="entete_color">${data["entete"]}</span><span class="invalid">  ${data["element"]} ${data["argument"].join(' ')}</span><br>`;
            else result.innerHTML = `
        <span class="entete_color">${data["entete"]}</span><span class="invalid">  ${data["element"]} ${data["argument"].join(' ')}</span><br>
        <span class="invalid">Command invalid</span><br>
        <span class="invalid">Tapez la commande <code>help</code> pour afficher la liste des commands disponibles!</span>
        `;

            history.appendChild(result);
        }

        element.value = "";
        document.getElementById("entete_command").textContent = `${this.user_name}:${this.current_path}$`;
        const terminal = document.getElementById("terminal");
        terminal.scrollTop = terminal.scrollTopMax;
    }
}

addEventListener("DOMContentLoaded", () => {
    const user_name = "Thomas-DEROME";
    const current_path = "~/portfolio";
    new Terminal(user_name, current_path);
})