const commands = {
    "help": {
        "description": "Liste toute les commandes", 
        "action": 
        function action(data) {
            const Terminal = data.this;
            let commands_key= []
            for (const command_key of Object.keys(commands)) {
                commands_key.push(`<code>${command_key}</code>: ${commands[command_key]['description']}`)
            }  
            
            for (const file of Object.keys(Terminal.content)) {
                if (Terminal.content[file]["type"] === "file") {
                    commands_key.push(`<code>${file}</code>: ${Terminal.content[file]["description"]}`);
                }
            }

            const response = document.createElement("div");

            response.innerHTML = `
            <span class="entete_color">${data.entete}</span><span class="valid">  ${data.entete}</span>
            `;

            let tableau_response_command = document.createElement("ul");

            for (const text of commands_key) {
                let li = document.createElement("li");
                li.innerHTML = text;
                tableau_response_command.appendChild(li);
            }

            tableau_response_command.classList.add("color_response")

            response.appendChild(tableau_response_command)
            print_result(response);
        }
    },
    "clear": {
        "description": "Permet de supprimer l'historique",
        "action":
        function action() {
            document.getElementById("history").innerHTML = '';
        }
    },

    "ls": {
        "description": "Liste tout les fichiers/dossiers",
        "action": function action(data) {
            const Terminal = data.this
            let temp = [];
            for (const key of Object.keys(Terminal.content)) {
                if (Terminal.content[key]["type"] === "folder") temp.push(`📁 ${key}`);
                else temp.push(`🖹 ${key}`);
            }

            const response = document.createElement("div");

            response.innerHTML = `
            <span class="entete_color">${data.entete}</span><span class="valid">  ${data.element}</span><br>
            <span class="color_response">${temp.join("&nbsp&nbsp&nbsp")}</span>
            `;

            print_result(response);
        }
    },
    "cd": {
        "description": "Entre dans un répertoire",
        "action": function action(data) {
            const Terminal = data.this
            const arg = data.argument.join(" ").split("/");
            let temp_path = Terminal.current_path.split("/");
            
            for (const chemin of arg) {
                if (chemin === ".." && temp_path.length > 1) {
                    temp_path = temp_path.slice(0, temp_path.length - 1);
                } else {
                    temp_path.push(chemin);
                }
            }

            const response = document.createElement("div");

            response.innerHTML = `
            <span class="entete_color">${data.entete}</span><span class="valid">  ${data.entete} ${data.argument.join(" ")}</span><br>
            `;

            print_result(response);
            
            temp_path = temp_path.join("/");
            if (temp_path.slice(-1) === "/") temp_path = temp_path.slice(0, temp_path.length - 1);

            return {"path": temp_path}
        }
    }
}

export { commands }