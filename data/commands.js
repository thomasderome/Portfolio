const commands = {
    "help": {
        "description": "Liste toute les commandes", 
        "action": 
        function action(data) {
            let commands_key= []
            for (const command_key of Object.keys(commands)) {
                commands_key.push(`<command>${command_key}</command>: ${commands[command_key]['description']}`)
            }
            
            const history = document.getElementById("history");
            const response = document.createElement("div");

            response.innerHTML = `
            <span class="entete_color">${data["entete"]}</span><span class="valid">  ${data["element"].value}</span>
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
            <span class="entete_color">${data["entete"]}</span><span class="valid">  ${data["element"].value}</span><br>
            <span class="color_response">${temp.join("&nbsp&nbsp&nbsp")}</span>
            `;

            history.appendChild(response);
        }
    },
    "cd": {
        "description": "Rentre dans un répertoire",
        "action": function action() {

        }
    }
}

export { commands }