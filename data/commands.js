const commands = {
    "help": {
        "description": "Liste toute les commandes", 
        "action": 
        function action(current_path, element) {
            let commands_key= []
            for (const command_key of Object.keys(commands)) {
                commands_key.push(`${command_key}: ${commands[command_key]['description']}`)
            }
            
            const history = document.getElementById("history");
            let response = document.createElement("div");

            let entete = document.createElement("span");
            entete.textContent = `${current_path} ${element.value}`;
            response.appendChild(entete)

            let tableau_response_command = document.createElement("ul");
            for (const text of commands_key) {
                let li = document.createElement("li");
                li.textContent = text;
                tableau_response_command.appendChild(li);
            }

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
        "action": function action() {
            alert("ls");
        }
    },
    "cd": {
        "description": "Rentre dans un répertoire",
        "action": function action() {

        }
    }
}

export { commands }