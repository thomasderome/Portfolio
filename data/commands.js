const commands = {
    "help": {
        "description": "Liste toute les commandes", 
        "action": 
        function action(data) {
            let commands_key= []
            for (const command_key of Object.keys(commands)) {
                commands_key.push(`<code>${command_key}</code>: ${commands[command_key]['description']}`)
            }  
            
            for (const file of Object.keys(data["content"])) {
                if (data["content"][file]["type"] == "file") {
                    commands_key.push(`<code>${file}</code>: ${data["content"][file]["description"]}`);
                }
            }

            const history = document.getElementById("history");
            const response = document.createElement("div");

            response.innerHTML = `
            <span class="entete_color">${data["entete"]}</span><span class="valid">  ${data["element"]}</span>
            `;

            let tableau_response_command = document.createElement("ul");

            for (const text of commands_key) {
                let li = document.createElement("li");
                li.innerHTML = text;
                tableau_response_command.appendChild(li);
            }

            tableau_response_command.classList.add("color_response")

            response.appendChild(tableau_response_command)
            history.appendChild(response);
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
        "description": "Liste tout les fichiers",
        "action": function action(data) {
            let temp = [];
            for (const key of Object.keys(data["content"])) {
                if (data["content"][key]["type"] == "folder") temp.push(`📁 ${key}`);
                else temp.push(`🖹 ${key}`);
            }

            const history = document.getElementById("history");
            const response = document.createElement("div");

            response.innerHTML = `
            <span class="entete_color">${data["entete"]}</span><span class="valid">  ${data["element"]}</span><br>
            <span class="color_response">${temp.join("&nbsp&nbsp&nbsp")}</span>
            `;

            history.appendChild(response);
        }
    },
    "cd": {
        "description": "Rentre dans un répertoire",
        "action": function action(data) {
            const arg = data["argument"].join(" ").split("/");
            let temp_path = data["current"].split("/");
            
            for (const chemin of arg) {
                if (chemin == ".." && temp_path.length > 1) {
                    temp_path = temp_path.slice(0, temp_path.length - 1);
                } else {
                    temp_path.push(chemin);
                }
            }
            
            const history = document.getElementById("history");
            const response = document.createElement("div");

            response.innerHTML = `
            <span class="entete_color">${data["entete"]}</span><span class="valid">  ${data["element"]} ${data["argument"].join(" ")}</span><br>
            `;

            history.appendChild(response);
            
            temp_path = temp_path.join("/");
            if (temp_path.slice(-1) == "/") temp_path = temp_path.slice(0, temp_path.length - 1)
        
            return {"path": temp_path}
        }
    }
}

export { commands }